from django.shortcuts import render
from .forms import MessageForm
from .models import Message
from django.http import HttpResponse
from django.http import HttpResponse, HttpResponseRedirect
from django.utils.timezone import now


# Create your views here.
def index(request):
    form = MessageForm(request.POST)

    if request.method == 'POST':
        if form.is_valid():
            Message.objects.create(name=form.cleaned_data['name'], body=form.cleaned_data['body'])
            return HttpResponseRedirect('/')
        else:
            for value in form.errors.get_json_data().values():
                error_message = value[0]['message']
            return HttpResponseRedirect('/')
    elif request.method == 'GET':
        message_list = list(Message.objects.values())
        for message in message_list:
            message['days_from_now'] = (now() - message['timestamp']).days
            message['hours_from_now'] = (now() - message['timestamp']).seconds // 3600
            message['minutes_from_now'] = ((now() - message['timestamp']).seconds // 60) % 60
        context = {
            'form': form,
            'message_list': message_list,
            'index': len(message_list)
        }
        return render(request, 'message_board/index.html', context)
