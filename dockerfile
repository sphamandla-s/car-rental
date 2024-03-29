# This line specifies the base image for the first stage of the build process.
# We're using node:20.11.1-alpine, which is a Node.js image with the Alpine Linux base.
FROM node:20.11.1-alpine AS build

# This line sets the working directory for the `build` stage.
# All subsequent commands in this stage will be executed relative to this directory.
WORKDIR /app

# This line copies all files with names starting with "package" and ending with ".json"
# from the current context (where the Dockerfile resides) to the working directory (`/app`)
# in the `build` stage. These files are typically used for dependency management with npm.
COPY package*.json ./

# This line runs the `npm install` command within the `build` stage. This command will
# install the dependencies listed in the `package.json` file located in the working directory.
RUN npm install

# This line copies all files from the current context (where the Dockerfile resides)
# to the working directory (`/app`) in the `build` stage. This effectively copies your entire
# application code into the image.
COPY . .

# This line runs the `npm run build --configuration=production` command within the `build` stage.
# This command is likely a script defined in your `package.json` file that builds your application
# for production. The `--configuration=production` flag specifies that the build should be optimized
# for production use.
RUN npm run build --configuration=production

# This line specifies the base image for the second (final) stage of the build process.
# We're using `nginx:stable`, which is a lightweight image containing the Nginx web server.
FROM nginx:stable

# This line copies your `nginx.conf` configuration file from the current context (where the Dockerfile resides)
# to the `/etc/nginx/conf.d/default.conf` location in the final image. This file likely defines how Nginx
# should serve your application.
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# This line copies the built application files from the `build` stage to the `/usr/share/nginx/html` directory
# in the final image. The `--from=build` flag specifies that we're copying from another stage (`build`).
# This effectively copies the production-ready version of your application into the Nginx container where it
# can be served by the web server.
COPY --from=build /app/dist/car-rental/browser /usr/share/nginx/html
