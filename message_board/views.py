from django.shortcuts import render
from .forms import MessageForm
from .models import Message
from django.http import HttpResponse


# Create your views here.
def index(request):
    form = MessageForm(request.POST)
    all_messages = list(Message.objects.all())
    print(all_messages)
    context = {
        'form': form
    }
    if request.method == 'POST':
        if form.is_valid():
            Message.objects.create(name=form.cleaned_data['name'], body=form.cleaned_data['body'])
            # reset form to blank
            form = MessageForm()
            context = {
                'form': form
            }
            return render(request, 'message_board/index.html', context)
    return render(request, 'message_board/index.html', context)
