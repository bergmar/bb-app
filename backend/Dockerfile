FROM node
WORKDIR /backend

# Copy only package.json and package-lock.json (if exists)
COPY backend.js .

EXPOSE 8000
CMD ["node", "backend.js"]