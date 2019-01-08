FROM node:11.6.0-alpine

COPY package.json .
COPY package-lock.json .

RUN npm install
#pobiera zalezosci

COPY src/ .
COPY angular.json .
COPY tsconfig.json .
COPY tslint.json .


#copy from to
CMD npm start
#ng serv
