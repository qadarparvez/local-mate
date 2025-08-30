# Greetings

## Prerequisites
1. docker installed
2. Kind cluster installed
3. python3 installed
4. virtualenv installed 

### local deployment
```
virtualenv env
```
```
source env/bin/activate
```
```
pip install -r requirements.txt
```
```
python3 manage.py migrate
```
```
python3 manage.py runserver 
```


