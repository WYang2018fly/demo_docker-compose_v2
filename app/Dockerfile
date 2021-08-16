FROM nginx:latest

ENV PORT=80

WORKDIR /app
COPY ./my_app/build /app/my_app
COPY ./nginx_conf /app/nginx_conf

RUN mkdir -p /var/www; \
    cp -r /app/my_app /var/www; \
    ln -s /app/nginx_conf/app.conf /etc/nginx/conf.d/app.conf; \
    rm /etc/nginx/conf.d/default.conf

EXPOSE $PORT
