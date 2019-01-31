FROM node:carbon

# install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install && npm install --client && npm run build --client


# copy app source to image _after_ npm install so that application code changes don't bust the docker cache of npm install step
COPY . .


# set up database
RUN ./setupdb.sh


# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
EXPOSE 8080


CMD [ "node", "app.js" ]


