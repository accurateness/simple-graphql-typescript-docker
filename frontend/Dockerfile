FROM node:slim

ENV NPM_CONFIG_LOGLEVEL warn

COPY ./ ./frontend
WORKDIR /frontend

RUN npm install

# Make our shell script executable
RUN chmod +x env.sh

# if dev settings will use create-react start script for hot code relaoding via docker-compose shared volume
# if production setting will build optimized static files and serve using http-server
CMD ["/bin/bash", "-c", "/frontend/env.sh && mv env-config.js /frontend/public && npm run start"]

