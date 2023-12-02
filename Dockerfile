FROM node:18
EXPOSE 3000

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install
RUN npm run build

ENTRYPOINT ["npx"]
CMD ["serve"]