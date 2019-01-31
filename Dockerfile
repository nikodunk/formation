FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# set up database
RUN ./setupdb.sh

EXPOSE 8080

CMD [ "node", "app.js" ]