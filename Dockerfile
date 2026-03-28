# Use a small, secure base image for static content
FROM nginx:alpine

# Set working directory in container
WORKDIR /usr/share/nginx/html

# Copy only necessary application files first for caching; all are static
COPY index.html styles.css script.js ./

# Expose default HTTP port
EXPOSE 80

# Start nginx in foreground (default CMD already does this in nginx image)
# Use explicit CMD for clarity and possible override
CMD ["nginx", "-g", "daemon off;"]
