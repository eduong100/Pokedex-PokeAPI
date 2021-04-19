from rest_framework.response import Response
from users.models import Users
from users.serializers import UsersSerializer
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET'])
def usersList(request):
    users = Users.objects.all()
    serializer = UsersSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def usersDetail(request, pk):
    users = Users.objects.get(id=pk)
    serializer = UsersSerializer(users, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def usersCreate(request):
    serializer = UsersSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def usersUpdate(request, pk):
    users = Users.objects.get(id=pk)
    serializer = UsersSerializer(instance=users, data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def usersDelete(request, pk):
    users = Users.objects.get(id=pk)
    users.delete()
    return Response('deleted')