from django import forms
from django.core.exceptions import ValidationError


class MessageForm(forms.Form):
    name = forms.CharField(label='name', max_length=20, min_length=1, required=True)
    body = forms.CharField(label='message', max_length=200,  min_length=1, required=True, widget=forms.Textarea)
    # def clean_name(self):
    #     name = self.cleaned_data['name']
    #     name = name.strip()
    #     if len(name) == 0:
    #         raise ValidationError('This field is required.')
    #     return name
    #
    # def clean_body(self):
    #     body = self.cleaned_data['body']
    #     body = body.strip()
    #     if len(body) == 0:
    #         raise ValidationError('This field is required.')
    #     return body
