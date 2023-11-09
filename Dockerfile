FROM node:18.15.0

MAINTAINER Seungheon Han<seungehon.bisb.2012@gmail.com>


COPY . .

RUN npm install

CMD ["node", "app"]