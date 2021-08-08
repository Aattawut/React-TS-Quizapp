FROM node:latest

WORKDIR /usr/src

EXPOSE 3001

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install --silent

RUN tsc --version

CMD ["npm", "start"]