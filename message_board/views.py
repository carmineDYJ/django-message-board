from django.shortcuts import render
from .forms import MessageForm
from .models import Message
from django.http import HttpResponse
from django.http import HttpResponse, HttpResponseRedirect
from django.core.paginator import Paginator


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
        # paginator = Paginator(message_list, 2)
        # page_number = request.GET.get('page')
        # page_obj = paginator.get_page(page_number)
        context = {
            'form': form,
            'message_list': message_list,
            'index': len(message_list)
        }
        return render(request, 'message_board/index.html', context)
