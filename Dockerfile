FROM node:6.6.0-slim

MAINTAINER Jason Zheng <jasonsuzheng@gmail.com>

# Copy over app
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Set working directory for app
WORKDIR /usr/src/app

# Remove node_modules
RUN rm -rf node_modules

# Install npm packages
RUN ./bin/install.sh
RUN npm rebuild node-sass
RUN npm run build

# Expose port 3000 for app
EXPOSE 3000

# Start node app
CMD [ "npm", "start" ]

