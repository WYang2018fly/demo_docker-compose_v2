FROM node:lts

ENV NODE_ENV=production \
    PORT=9007

WORKDIR /service

COPY ./dist /service
COPY ./package.json /service

RUN npm install yarn --registry https://registry.npm.taobao.org/; \
    yarn --registry https://registry.npm.taobao.org/

EXPOSE $PORT
CMD [ "node", "./bundle.js" ]

# 时区设置
# ENV TZ=Asia/Shanghai \
#     DEBIAN_FRONTEND=noninteractive

# RUN apt update \
#     && apt install -y tzdata \
#     && ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \
#     && echo ${TZ} > /etc/timezone \
#     && dpkg-reconfigure --frontend noninteractive tzdata \
#     && rm -rf /var/lib/apt/lists/*