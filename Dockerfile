# Etapa 1: build com Bun
FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build


# Etapa 2: servir arquivos estáticos com Nginx
FROM nginx:alpine

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build do Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Config para React Router funcionar em rotas internas
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
