FROM node:carbon

# install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install
echo "npm install"

# copy app source to image _after_ npm install so that application code changes don't bust the docker cache of npm install step
COPY . /app
echo "copy to app"

# Make React App
RUN cd client && npm install && npm run build

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
EXPOSE 8080


CMD [ "node", "app.js" ]
