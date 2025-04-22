FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npx", "http-server", ".", "-p", "3000"]
