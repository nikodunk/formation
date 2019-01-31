FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install



# Bundle app source
COPY . .

# Make React App
# RUN  cd client && npm install && npm run build


EXPOSE 8080

RUN npm install -g knex

RUN knex migrate:latest
RUN knex seed:run

CMD [ "node", "app.js" ]