# Node version
FROM node:18-slim

# Use default node user
USER node

# Set workdir
WORKDIR /client

# Copy package.json and install deps
COPY --chown=node:node package*.json .
RUN npm install --frozen-lockfile

# Copy app and chown files
COPY --chown=node:node . .

# Ensure proper permissions for the working directory
RUN chmod -R 775 /client

# Expose port
EXPOSE 5173

# Startup command
CMD ["npm", "run", "host"]
