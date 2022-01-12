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
        message_per_page = 2
        page_total_count = len(message_list)
        # paginator = Paginator(message_list, message_per_page)
        # page_number = request.GET.get('page')
        # page_obj = paginator.get_page(page_number)
        context = {
            'form': form,
            'message_list': message_list,
            'index': len(message_list),
            'page_total_count': page_total_count
        }
        return render(request, 'message_board/index.html', context)
