FROM node:18

ARG NEXT_PUBLIC_WEB_FORM=${NEXT_PUBLIC_WEB_FORM}


WORKDIR /app

RUN apt-get update && \
    apt-get install -y python3

COPY package.json yarn.lock ./

COPY next.config.mjs ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD ["yarn", "start"]