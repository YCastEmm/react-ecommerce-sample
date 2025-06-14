# Imagen base oficial de Node.js
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto donde corre tu API
EXPOSE 3000

# Comando de arranque: correr seed y luego el backend
CMD ["sh", "-c", "node seed.js && npm start"]