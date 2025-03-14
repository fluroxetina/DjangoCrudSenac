from rest_framework import status
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from api.models import *
from api.serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserSerializer

class User(APIView):
    def get(self, request, id=None):
        
        if id:
            usuario = get_object_or_404(CustomUser, pk=id)
            serializer = UserSerializer(usuario)
            return Response(serializer.data, status=status.HTTP_200_OK)
            
            
        usuario = CustomUser.objects.all()
        serializer = UserSerializer(usuario, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        nome = request.data.get('username')
        senha = request.data.get('password')

        if not nome or not senha:
            return Response({'error':'Todos os campos são obrigatorios.'}, status=status.HTTP_400_BAD_REQUEST)
        
        usuario = CustomUser.objects.create(
            username=nome ,
            password=make_password(senha),
            is_active=True,
            is_aluno=True 
             
        )
        
        return Response({'message':'Usuario criado com sucesso', 'id':usuario.id}, status=status.HTTP_201_CREATED)
    
    def put(self, request, id):
        usuario = get_object_or_404(CustomUser, pk=id)
        serializer = UserSerializer(usuario, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        usuario = get_object_or_404(CustomUser, pk=id)
        if usuario:
            usuario.delete()
            return Response({'status': status.HTTP_200_OK})
        else:
            return Response({'status': status.HTTP_404_NOT_FOUND})
    
    
    
class Login(APIView):
    def post(self, request):
        nome = request.data.get("nome")
        senha = request.data.get("senha")

        usuario = authenticate(username=nome, password=senha)

        if(usuario):
            login(request, usuario)
            return Response({"status": status.HTTP_200_OK})
        else:
            return Response({'mensagem': "Usuário não encontrado", "stauts": status.HTTP_401_UNAUTHORIZED})
        
