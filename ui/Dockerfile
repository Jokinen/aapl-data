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
FROM appbase as staticbuilder
# =============================

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL "$REACT_APP_API_URL"

RUN npm ci

COPY . /app

RUN npm run build

# =============================
FROM nginx:1.17 as production
# =============================

COPY --from=staticbuilder /app/build /usr/share/nginx/html

COPY .prod/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
