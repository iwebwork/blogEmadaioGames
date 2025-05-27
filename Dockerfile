# Estágio 1: Build da Aplicação
# Usamos uma imagem Node.js para compilar a aplicação React.
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do container.
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (ou yarn.lock)
# Isso permite que o Docker utilize o cache para a camada de dependências
# se esses arquivos não mudarem.
COPY package*.json ./

# Instala as dependências.
# Usamos --frozen-lockfile para garantir que a versão das dependências
# seja a mesma do package-lock.json, evitando problemas de compatibilidade.
RUN npm install --frozen-lockfile

# Copia o restante dos arquivos da aplicação.
COPY . .

# Constrói a aplicação React.
# 'build' é o comando padrão do create-react-app para gerar os arquivos estáticos.
RUN npm run build

# Estágio 2: Servir a Aplicação
# Usamos uma imagem Nginx para servir os arquivos estáticos gerados.
# Nginx é leve e muito eficiente para servir conteúdo estático.
FROM nginx:alpine

# Remove o arquivo de configuração padrão do Nginx para evitar conflitos.
RUN rm /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos da aplicação do estágio de build para o diretório de serviço do Nginx.
COPY --from=builder /app/build /usr/share/nginx/html

# Copia um arquivo de configuração customizado do Nginx.
# Este arquivo é crucial para configurar o Nginx para roteamento do lado do cliente (SPA).
COPY nginx.conf /etc/nginx/conf.d/

# Expõe a porta 80, que é a porta padrão do Nginx.
EXPOSE 80

# Comando para iniciar o Nginx quando o container for executado.
CMD ["nginx", "-g", "daemon off;"]