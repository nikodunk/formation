FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# seed database
RUN ln -sf `ls -td /opt/elasticbeanstalk/node-install/node-* | head -1`/bin/node /bin/node
RUN ln -sf `ls -td /opt/elasticbeanstalk/node-install/node-* | head -1`/bin/npm /bin/npm
RUN knex migrate:latest

# Make React App
# RUN  cd client && npm install && npm run build


EXPOSE 8080

CMD [ "node", "app.js" ]