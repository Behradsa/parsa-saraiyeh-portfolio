# FROM node:18-alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install

# RUN npm i -g serve

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD [ "serve", "-s", "dist" ]

# Step 1: Build the Vite app
FROM node:18         AS build

WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine   

# Copy build files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx is using
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
