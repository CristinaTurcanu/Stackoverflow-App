FROM node:12.10.0-alpine

RUN yarn global add json-server

WORKDIR /app

EXPOSE 3000

CMD json-server --host 0.0.0.0 --watch data/db.json