FROM node:16.14.2-alpine
WORKDIR /code
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "run", "dev", "--host"]