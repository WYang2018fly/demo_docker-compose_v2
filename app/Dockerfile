FROM nginx:latest

ENV PORT=80 

WORKDIR /app

COPY ./my_app/build /var/www/my_app
COPY ./nginx_conf/app.conf /etc/nginx/conf.d/default.conf
COPY ./bootstrap.sh /

EXPOSE $PORT
CMD ["/bin/bash", "/bootstrap.sh"]
