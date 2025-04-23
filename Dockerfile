# Use the official Nginx image
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website files to the Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
