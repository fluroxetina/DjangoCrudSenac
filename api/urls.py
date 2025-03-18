from django.urls import path, include
from api.views.apiViews import *
from api.views.webViews import *

urlpatterns = [ 
               
    path('api/user', User.as_view(), name="usuarios"),
    path('api/user/<int:id>', User.as_view(), name="usuarios"),
    path('api/login/', Login.as_view(), name="loginAPI"),
    path('api/GetDadosUsuarioLogado/', GetDadosUsuarioLogado.as_view(), name="getDadosUsuarioLogado"),
    path('home/', home, name="home"),
    path('login/', login, name="login"),
    path('criarAluno/', criarAluno, name="criarAluno"),
    path('criarAluno/<int:id>', criarAluno, name="criarAlunoEdicao"),


]