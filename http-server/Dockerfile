FROM --platform=linux/amd64 node:12.18.1
 
WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 8000

CMD ["npm","start"]