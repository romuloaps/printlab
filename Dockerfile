FROM node:20-alpine

WORKDIR /app

RUN apk add jq

RUN mkdir -p data_source/
RUN mkdir -p data/
COPY ./.data/*.json data_source/
RUN jq -s 'reduce .[] as $item ({}; . * $item)' data_source/* >> data/db.json

RUN npm i -g json-server

EXPOSE 3000

CMD ["json-server", "-p", "3000", "data/db.json"]