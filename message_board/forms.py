from django import forms


class MessageForm(forms.Form):
    name = forms.CharField(label='Name', max_length=20, required=True)
    body = forms.CharField(label='Message', max_length=200, required=True, widget=forms.Textarea)
