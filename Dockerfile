FROM python:3.13-alpine3.22

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

ENTRYPOINT [ "python3" ]

EXPOSE 8000

CMD [ "manage.py", "runserver", "0.0.0.0:8000" ]