# Development Dockerfile
FROM node

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies (including devDependencies)
RUN npm install

# Copy all files
COPY . .

# Expose ports
# 3000 - Vite dev server
# 5555 - JSON Server
# 4173 - Vite preview (optional)
EXPOSE 3000 5555 4173

# Start both servers using concurrently (matches your npm run dev)
CMD ["npm", "run", "dev"]