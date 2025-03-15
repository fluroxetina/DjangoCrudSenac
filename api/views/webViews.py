from django.shortcuts import render, redirect
from api.models import *

def home(request):
    # if not request.user.is_authenticated:
    #     return redirect('login')
    user = CustomUser.objects.all()
    return render(request, 'home.html', {'usuarios': user})

def login(request):
    return render(request, 'login.html')

def criarAluno(request):
    return render(request, 'criarAluno.html')