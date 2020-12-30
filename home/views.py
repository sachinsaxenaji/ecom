from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.contrib.auth.hashers import  check_password
from django.shortcuts import render

# import http.client
# # Create your views here.
# import json
# import requests
# import ast

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import permissions, status, generics
# # from forms import UserForm
# from .models import User, PhoneOTP
# from django.shortcuts import get_object_or_404, redirect
# import random
# from . serializer import CreateUserSerializer, LoginUserSerializer
# from knox.views import LoginView as KnoxLoginView
# from knox.auth import TokenAuthentication
# from rest_framework.authentication import SessionAuthentication, BasicAuthentication
# from rest_framework.permissions import IsAuthenticated

# from django.contrib.auth import login,logout

# conn = http.client.HTTPConnection("2factor.in")


# class LoginAPI(KnoxLoginView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request, format=None):
#         serializer = LoginUserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         if user.last_login is None :
#             user.first_login = True
#             user.save()
            
#         elif user.first_login:
#             user.first_login = False
#             user.save()
            
#         login(request, user)
#         return super().post(request, format=None)


# class ValidatePhoneSendOTP(APIView):

#     def post(self, request, *args, **kwargs):
#         phone_number = request.data.get('phone')
        
#         if phone_number:
#             phone = str(phone_number)
#             user = User.objects.filter(phone__iexact = phone)
#             if user.exists():
#                 return Response({
#                     'status' : False,
#                     'detail' : 'Phone number already exists'
#                 })

#             else:
#                 key = send_otp(phone)
#                 if key:
#                     old = PhoneOTP.objects.filter(phone__iexact = phone)
#                     if old.exists():
#                         old = old.first()
#                         count = old.count
#                         if count > 10:
#                             return Response({
#                                 'status' : False,
#                                 'detail' : 'Sending otp error. Limit Exceeded. Please Contact Customer support'
#                             })

#                         old.count = count +1
#                         old.save()
#                         print('Count Increase', count)

#                         conn.request("GET", "https://2factor.in/API/R1/?module=SMS_OTP&apikey=6e1bb287-4429-11eb-8153-0200cd936042&to="+phone+"&otpvalue="+str(key)+"&templatename=sachin")
#                         res = conn.getresponse() 
                       
#                         data = res.read()
#                         data=data.decode("utf-8")
#                         data=ast.literal_eval(data)
                        
                        
#                         if data["Status"] == 'Success':
#                             old.otp_session_id = data["Details"]
#                             old.save()
#                             print('In validate phone :'+old.otp_session_id)
#                             return Response({
#                                    'status' : True,
#                                    'detail' : 'OTP sent successfully'
#                                 })    
#                         else:
#                             return Response({
#                                   'status' : False,
#                                   'detail' : 'OTP sending Failed'
#                                 }) 

                       


#                     else:

#                         obj=PhoneOTP.objects.create(
#                             phone=phone,
#                             otp = key,
#                         )
#                         conn.request("GET", "https://2factor.in/API/R1/?module=SMS_OTP&apikey=6e1bb287-4429-11eb-8153-0200cd936042&to="+phone+"&otpvalue="+str(key)+"&templatename=test")
#                         res = conn.getresponse()    
#                         data = res.read()
#                         print(data.decode("utf-8"))
#                         data=data.decode("utf-8")
#                         data=ast.literal_eval(data)

#                         if data["Status"] == 'Success':
#                             obj.otp_session_id = data["Details"]
#                             obj.save()
#                             print('In validate phone :'+obj.otp_session_id)
#                             return Response({
#                                    'status' : True,
#                                    'detail' : 'OTP sent successfully'
#                                 })    
#                         else:
#                             return Response({
#                                   'status' : False,
#                                   'detail' : 'OTP sending Failed'
#                                 })

                        
#                 else:
#                      return Response({
#                            'status' : False,
#                             'detail' : 'Sending otp error'
#                      })   

#         else:
#             return Response({
#                 'status' : False,
#                 'detail' : 'Phone number is not given in post request'
#             })            

# class ValidateOTP(APIView):
#     '''
#     If you have received otp, post a request with phone and that otp and you will be redirected to set the password
    
#     '''

#     def post(self, request, *args, **kwargs):
#         phone = request.data.get('phone', False)
#         otp_sent   = request.data.get('otp', False)

#         if phone and otp_sent:
#             old = PhoneOTP.objects.filter(phone__iexact = phone)
#             if old.exists():
#                 old = old.first()
#                 otp = old.otp
#                 if str(otp) == str(otp_sent):
#                     old.logged = True
#                     old.save()

#                     return Response({
#                         'status' : True, 
#                         'detail' : 'OTP matched, kindly proceed to save password'
#                     })
#                 else:
#                     return Response({
#                         'status' : False, 
#                         'detail' : 'OTP incorrect, please try again'
#                     })
#             else:
#                 return Response({
#                     'status' : False,
#                     'detail' : 'Phone not recognised. Kindly request a new otp with this number'
#                 })


#         else:
#             return Response({
#                 'status' : 'False',
#                 'detail' : 'Either phone or otp was not recieved in Post request'
#             })
            
# class Register(APIView):
    
#     '''Takes phone and a password and creates a new user only if otp was verified and phone is new'''

#     def post(self, request, *args, **kwargs):
#         phone = request.data.get('phone', False)
#         password = request.data.get('password', False)

#         if phone and password:
#             phone = str(phone)
#             user = User.objects.filter(phone__iexact = phone)
#             if user.exists():
#                 return Response({'status': False, 'detail': 'Phone Number already have account associated. Kindly try forgot password'})
#             else:
#                 old = PhoneOTP.objects.filter(phone__iexact = phone)
#                 if old.exists():
#                     old = old.first()
#                     if old.logged:
#                         Temp_data = {'phone': phone, 'password': password }

#                         serializer = CreateUserSerializer(data=Temp_data)
#                         serializer.is_valid(raise_exception=True)
#                         user = serializer.save()
#                         user.save()

#                         old.delete()
#                         return Response({
#                             'status' : True, 
#                             'detail' : 'Congrts, user has been created successfully.'
#                         })

#                     else:
#                         return Response({
#                             'status': False,
#                             'detail': 'Your otp was not verified earlier. Please go back and verify otp'

#                         })
#                 else:
#                     return Response({
#                     'status' : False,
#                     'detail' : 'Phone number not recognised. Kindly request a new otp with this number'
#                 })
#         else:
#             return Response({
#                 'status' : 'False',
#                 'detail' : 'Either phone or password was not recieved in Post request'
#             })
            
# class LoginAPI(KnoxLoginView):
#     permission_classes = (permissions.AllowAny, )

#     def post(self, request, format = None):
#         serializer = LoginUserSerializer(data = request.data)
#         serializer.is_valid(raise_exception = True)
#         user = serializer.validated_data['user']
#         login(request, user)
#         return super().post(request, format=None)


# def send_otp(phone):
#     if phone:
#         key = random.randint(999,9999)
#         print(key)
#         return key
#     else:
#         return False

def login(request):
    if request.method== 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username,password=password)
        request.session['user_id'] = user.id
        request.session['email'] = user.email
        

        if user is not None:
            
            auth.login(request, user)
            return redirect("/shop")
            
        else:
            messages.info(request,'invalid credentials')
            return redirect("/home/register/")

    else:
        return render(request,'/home/register/')    

def register(request):

    if request.method == 'POST':
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        email = request.POST['email']

        if password1==password2:
            if User.objects.filter(username=username).exists():
                messages.info(request,'Username Taken')
                return redirect("/home/register/")
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email Taken')
                return redirect("/home/register/")
            else:   
                user = User.objects.create_user(username=username, password=password1, email=email)
                user.save();
                print('user created')
                return redirect("/home/register/")

        else:
            messages.info(request,'password not matching..')    
            return redirect("/home/register/")
        return redirect("/shop")
        
    else:
        return render(request,'home/index.html')



def logout(request):
    auth.logout(request)
    return redirect('/')       
