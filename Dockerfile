FROM nginx:alpine
COPY html/ /usr/share/nginx/html 
COPY conf/nginx.conf /etc/nginx/conf.d
EXPOSE 80:8080
