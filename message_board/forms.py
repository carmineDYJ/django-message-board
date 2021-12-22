from django import forms


class MessageForm(forms.Form):
    name = forms.CharField(label='name', max_length=20, required=False)
    body = forms.CharField(label='message', max_length=200, required=False, widget=forms.Textarea)
