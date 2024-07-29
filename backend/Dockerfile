FROM  python:3.9.6-bullseye

WORKDIR /backend

RUN pip install django django-cors-headers pymongo

# copy from the current directory of the Dockerfile to /backend in the image
COPY . . 

EXPOSE 8000
