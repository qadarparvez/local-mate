FROM python:3.13-alpine AS builder 

WORKDIR /app

COPY  . . 
COPY requirements.txt .

RUN chmod +x user.sh
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate



# # second stage 
# FROM python:3.13-alpine 

# WORKDIR /app    # use this if you want your image smaller 
                  # not recommended though as the image is already smaller 
# COPY --from=builder ./app .

EXPOSE 8000

ENTRYPOINT [ "python3" ]

CMD [ "manage.py" , "runserver" ,"0.0.0.0:8000" ]


