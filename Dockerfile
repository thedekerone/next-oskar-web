FROM node:10
COPY package.json /usr/
WORKDIR /usr/
RUN npm install
COPY . /usr/
RUN npm run build
CMD [ "npm", "run", "start" ]
EXPOSE 3000