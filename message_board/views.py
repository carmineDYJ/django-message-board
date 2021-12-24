from django.shortcuts import render
from .forms import MessageForm
from .models import Message
from django.http import HttpResponse


# Create your views here.
def index(request):
    form = MessageForm(request.POST)
    message_list = Message.objects.values()
    print(message_list)
    context = {
        'form': form,
        'message_list': message_list
    }
    if request.method == 'POST':
        if form.is_valid():
            Message.objects.create(name=form.cleaned_data['name'], body=form.cleaned_data['body'])
            # reset form to blank
            form = MessageForm()
            context = {
                'form': form,
                'message_list': message_list
            }
            return render(request, 'message_board/index.html', context)
        else:
            for value in form.errors.get_json_data().values():
                error_message = value[0]['message']
            context = {
                'form': form,
                'message_list': message_list,
                'error_message': error_message
            }
            return render(request, 'message_board/index.html', context)

    return render(request, 'message_board/index.html', context)
