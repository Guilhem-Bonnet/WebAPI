const express = require('express');
const fetch = import('node-fetch');
const fs = require('fs');

const app = express();

// Charge les clés autorisées depuis un fichier JSON
const allowedKeys = JSON.parse(fs.readFileSync('allowed-keys.json', 'utf8')).keys;

// Vérifie si une clé est autorisée
function isKeyAuthorized(key) {
  return allowedKeys.includes(key);
}

// Endpoint de l'API pour récupérer les actualités
app.get('/actualites', (req, res) => {
  // Vérifie que la clé d'API est fournie dans le paramètre de requête "apikey"
  if (req.query.apikey && isKeyAuthorized(req.query.apikey)) {
    // Lis le contenu du fichier JSON
    fs.readFile('./actualites.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur interne du serveur');
        return;
      }

      try {
        // Transforme le contenu JSON en un tableau d'objets JavaScript
        const actualites = JSON.parse(data);
        // Envoie les actualités en réponse à la requête
        res.json(actualites);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la récupération des actualités');
      }
    });
  } else {
    // Envoie une erreur 401 (Non autorisé) si la clé d'API est invalide
    res.status(401).send('Clé d\'API invalide');
  }
});

// Lance le serveur sur le port 3000
app.listen(3000, () => {
  console.log('API démarrée sur le port 3000');
});
