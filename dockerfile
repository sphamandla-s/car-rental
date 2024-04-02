FROM node:20.11.1-alpine AS build


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build --configuration=production


FROM nginx:stable


COPY ./nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=build /app/dist/car-rental/browser /usr/share/nginx/html
