# Verwende ein Node.js-Image als Basis
FROM node:18

# Erstelle ein Verzeichnis für die Anwendung
WORKDIR /app

# Kopiere package.json und package-lock.json, um die Abhängigkeiten zu installieren
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install -g pm2 && npm install

# Kopiere den Rest des Projektcodes
COPY . .

# Exponiere den Port, den dein Server verwendet
EXPOSE 3000

# Starte die Anwendung mit pm2, im Cluster-Modus mit maximaler Instanzanzahl -> Mehr redundanz
CMD ["pm2-runtime", "start", "main.js", "--name", "number-guessing-server", "-i", "max"]
