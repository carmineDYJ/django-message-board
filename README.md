# django-message-board

## Background

This project is a public message board which allows any user to leave messages.
## Install
clone
```
git clone git@github.com:carmineDYJ/django-message-board.git
cd django-message-board
```
use pip to install all dependencies.
```
pip install -r requirements.txt
```
## Usage
edit mysql settings in django_message_board settings.py
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_message_board',
        'USER': 'root',
        'PASSWORD': 'yourpassword',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```

If you have installed all the dependencies, then you can run the project locally by running the command below in the root directory of the project.
```
python manage.py runserver
```