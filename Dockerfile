FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY .env /
RUN export $(cat .env | xargs) 
COPY ["package.json", "package-lock.json*", "./"]
RUN apk add --no-cache python3 make g++
RUN npm install --production --silent --force && mv node_modules ../
COPY . .
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]