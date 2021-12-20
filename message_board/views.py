from django.shortcuts import render
from .forms import MessageForm
from django.http import HttpResponse


# Create your views here.
def index(request):
    form = MessageForm(request.POST)
    context = {
        'form': form
    }
    if request.method == 'POST':
        if form.is_valid():
            return render(request, 'message_board/index.html', context)
    return render(request, 'message_board/index.html', context)
