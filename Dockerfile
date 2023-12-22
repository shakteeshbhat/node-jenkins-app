FROM mhart/alpine-node

EXPOSE 8081

WORKDIR /app

COPY . /app

CMD ["node", "app.js"]
