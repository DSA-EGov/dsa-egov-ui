FROM node:20-alpine
WORKDIR /app
COPY . .
RUN apk update
RUN apk upgrade
RUN npm upgrade -g
RUN npm install --force pnpm
RUN pnpm install
EXPOSE 5173
CMD pnpm run dev --host
