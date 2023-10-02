# Use the latest Node.js Alpine Linux image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary project files
COPY ./config ./config/
COPY ./src ./src/
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Change permissions if needed (uncomment and adjust as necessary)
# RUN chown -R node:node /app

# Specify the user to run the application (optional)
# USER node

# Command to run the application
CMD ["npm", "start"]