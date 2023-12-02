FROM NODE:18
EXPOSE 3000

RUN npm install
RUN npm run build

COPY . .

ENTRYPOINT ["node"]
CMD [".output/server/index.mjs"]