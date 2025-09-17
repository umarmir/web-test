# Use Nginx to serve static files
FROM nginx:alpine

# Remove default static content
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML/CSS/JS files
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
