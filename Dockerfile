FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
# COPY package.json package-lock.json .

RUN npm install

# Bundle app source
COPY . .

# Make React App
RUN  cd client && npm install && npm run build

EXPOSE 8080

CMD [ "node", "app.js" ]