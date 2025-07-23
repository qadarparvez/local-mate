from django.shortcuts import render
from website.models import form 

# Create your views here.


def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    success = False
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        contact_reason = request.POST.get('contactReason')
        message = request.POST.get('message')
        contact_entry = form(name=name , email=email , phone=phone , message=message , contactReason=contact_reason)
        contact_entry.save()
        success = True
    return render(request, 'contact.html', {'success': success})


def sighnup(request):
    return render(request, 'sighnup.html')

def login(request):
    return render(request , 'login.html')