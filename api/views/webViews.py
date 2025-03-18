from django.shortcuts import render, redirect
from api.models import *

def home(request):
    
    if not request.user.is_authenticated:
        return redirect('login')
    
    user = CustomUser.objects.all()
    return render(request, 'home.html', {'usuarios': user})

def login(request):
    return render(request, 'login.html')

def criarAluno(request,id=None):
    if not request.user.is_authenticated:
        return render(request, 'login.html')
    else:
        if id:
            user = CustomUser.objects.filter(id=id).first()
            if user:
                return render(request, 'criarAluno.html', {'usuarioDetalhe': user})   
            else:
                return redirect('CriarAluno')

        return render(request, 'criarAluno.html')
            


