# Use uma imagem base Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package*.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . ./

# Construa a aplicação React para produção
RUN npm run build

# Use uma imagem base Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos de build do React para o diretório de arquivos estáticos do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta 80 para acessar a aplicação
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]