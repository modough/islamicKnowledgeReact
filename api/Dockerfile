FROM node:16.14.2-alpine
WORKDIR /api
COPY ./package.json ./
RUN yarn install
COPY . .
CMD ["npm", "start"]