FROM node:16.19.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN apk update && \
    apk add --no-cache --virtual .gyp python3 make g++ && \
    npm install && \
    apk del .gyp

# node_modules is not copied due to dockerignore file
COPY . . 

EXPOSE 5000

CMD ["npm", "start"]