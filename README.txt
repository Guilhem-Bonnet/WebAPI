lienWeb : http://localhost:3000/actualites?apikey=clé_GameLauncherWPF-@874@DD
# WebAPI
WebAPI est une API REST développée en Node.js permettant de gérer des actualités. L'API fournit deux endpoints permettant de récupérer toutes les actualités stockées et une actualité spécifique en fonction de son identifiant.

## Installation
Cloner le dépôt :
```bash
git clone https://github.com/Guilhem-Bonnet/WebAPI.git
```
Installer les dépendances :
```bash
cd WebAPI
npm install
```
Créer un fichier .env à la racine du projet et y ajouter la clé d'API (cf. api-key.js) :
```bash
API_KEY=YOUR_API_KEY
```
Lancer l'application :
```bash
npm start
```
Endpoints
GET /news
Récupère toutes les actualités stockées dans le fichier actualites.json.

Paramètres de requête :

fields : permet de spécifier les champs à retourner pour chaque actualité. Si non spécifié, tous les champs seront retournés. Les champs autorisés sont définis dans le fichier allowed-keys.json.
Exemple de requête cURL :

bash
Copy code
curl http://localhost:3000/news?fields=title,date
Exemple de réponse JSON :

json
Copy code
[
  {
    "title": "Nouveau produit disponible",
    "date": "2022-02-15T14:30:00.000Z"
  },
  {
    "title": "Fermeture annuelle",
    "date": "2022-08-01T00:00:00.000Z"
  }
]
GET /news/:id
Récupère une actualité spécifique en fonction de son identifiant.

Exemple de requête cURL :

bash
Copy code
curl http://localhost:3000/news/1
Exemple de réponse JSON :

json
Copy code
{
  "id": 1,
  "title": "Nouveau produit disponible",
  "date": "2022-02-15T14:30:00.000Z",
  "content": "Nous sommes heureux de vous annoncer la disponibilité de notre nouveau produit."
}
Fichiers
actualites.json
Ce fichier contient les actualités stockées dans l'API. Chaque actualité est représentée par un objet JSON avec les propriétés suivantes :

id : identifiant unique de l'actualité (nombre entier)
title : titre de l'actualité (chaîne de caractères)
date : date de l'actualité (chaîne de caractères au format ISO 8601)
content : contenu de l'actualité (chaîne de caractères)
allowed-keys.json
Ce fichier contient les noms de propriétés autorisées dans les réponses de l'API. Si une propriété non autorisée est spécifiée dans la requête, elle sera ignorée.

api-key.js
Ce fichier contient la clé d'API utilisée pour authentifier les requêtes à l'API. La clé est exportée en tant que variable apiKey.

index.js
Ce fichier contient le code principal de l'API. Il définit les endpoints et gère les requêtes entrantes. L'API utilise le framework Express.js pour gérer les requêtes HTTP.