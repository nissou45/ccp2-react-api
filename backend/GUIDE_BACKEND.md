# # 🤩 🫣 🙂‍↕️ 🤔 😎 Mini Gestionnaire - Backend Setup 🫩 😍 🤡 🥸 🥲

## 1. Création du dossier

mkdir backend
cd backend

## 2. Initialisation

yarn init -y

## 3. Installation dépendances

yarn add express mysql2 jsonwebtoken argon2 dotenv cors zod
yarn add --dev nodemon

## 4. Création structure

mkdir config controllers middleware models routes
touch server.js
touch .env
touch config/db.js

## 5.Architecture backend

config/ → Configuration base de données
controllers/ → Logique métier (auth, commandes)
middleware/ → Sécurité (auth, role, validation)
models/ → Accès base de données
routes/ → Définition des endpoints
server.js → Point d’entrée
.env → Variables sensibles

## 6.Scripts à ajouter dans package.json

"scripts": {
"start": "node server.js",
"dev": "nodemon server.js"
}

## 7. Mes choix!

express → Création API REST

mysql2 → Base relationnelle

argon2 → Hash sécurisé des mots de passe

jsonwebtoken → Authentification stateless

zod → Validation des données

dotenv → Protection des variables sensibles

cors → Autoriser le frontend à communiquer avec l’API

nodemon → Redémarrage automatique en développement

## 8. Séparation des responsabilités

La connexion à la base de données est placée dans config/db.js afin de :

Centraliser la configuration

Séparer l’initialisation du serveur de la logique base de données

Faciliter la maintenance

Respecter une architecture modulaire
