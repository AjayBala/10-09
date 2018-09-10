FROM node:9.5 as builder

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json

RUN npm install

RUN npm install -g react-scripts@1.1.1

Run npm rebuild node-sass --force

RUN npm run build

# RUN npm run _coverage

CMD ["npm", "start"]

FROM nginx:1.13.3-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY nginx/ssl  /etc/nginx/ssl/

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# COPY --from=builder /usr/src/app/coverage /usr/share/nginx/html

# RUN mkdir /usr/share/assets
# RUN mkdir /usr/share/assets/fonts
# COPY assets/fonts /usr/share/assets/fonts

COPY assets/fonts /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]