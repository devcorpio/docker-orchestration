FROM node:latest

LABEL maintainer='devcorpio'

RUN npm install redis

ADD example.js /myapp/example.js