# =============================
FROM node:14 as appbase
# =============================

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# =============================
FROM appbase as development
# =============================

RUN npm install --silent

COPY . /app

# start app
CMD ["npm", "start"]

# =============================
FROM appbase as production
# =============================

ARG PORT
ENV PORT "$PORT"

ARG ALPHA_VANTAGE_API_KEY
ENV ALPHA_VANTAGE_API_KEY "$ALPHA_VANTAGE_API_KEY"

ARG ALPHA_VANTAGE_API_URL
ENV ALPHA_VANTAGE_API_URL "$ALPHA_VANTAGE_API_URL"

RUN npm ci

COPY . /app

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
