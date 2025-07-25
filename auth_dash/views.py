# auth_dash/views.py
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required

def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # URL name of login page
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})


def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('dashboard')  # Replace with your homepage URL name
        else:
            return render(request, 'registration/login.html', {"error": "Invalid credentials"})
    return render(request, 'registration/login.html')


def logout_view(request):
    logout(request)
    return redirect('login')


@login_required
def dashboard(request):
    return render(request, 'dashboard.html')