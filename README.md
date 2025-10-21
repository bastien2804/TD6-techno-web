# API Node.js TypeScript 

API pour gérer des utilisateurs avec Node.js, Express et TypeScript.

## Installation et lancement


1. **Cloner le projet**
   ```bash
   git clone <url-du-repository>
   cd api-node-ts
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancement du serveur**

   ```bash
  npm run dev
  ```

## Routes API

  Serveur disponible sur : `http://localhost:4000`

  http://localhost:4000/users

### Tester l'API
```bash
GET /                    
```

### Gestion des utilisateurs
```bash
GET /users              # Récupérer tous les utilisateurs
POST /users             # Ajouter un utilisateur
```

## Tests avec cURL

```bash
# Récupérer les utilisateurs
curl http://localhost:4000/users

# Ajouter un utilisateur
curl -X POST http://localhost:4000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```



## Structure

```
api-node-ts/
├── src/
│   ├── controllers/
│   │   └── user.controller.ts    
│   ├── routes/
│   │   └── user.routes.ts        
│   └── index.ts                  
├── dist/                         
├── .env                          
├── nodemon.json                  
├── tsconfig.json                 
├── package.json                  
└── README.md                     
```

##  Important

- Données stockées en mémoire (perdues au redémarrage)
- Champs obligatoires : `name` et `email`
