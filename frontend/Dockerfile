FROM node
WORKDIR /frontend

COPY package.json .

RUN npm i -g pnpm
RUN pnpm i

COPY . .

EXPOSE 4915
CMD ["pnpm", "run", "dev:docker", "--host", "0.0.0.0"]