// Importation des types Request et Response depuis Express
// Request : représente la requête HTTP reçue
// Response : représente la réponse HTTP envoyée au client
import { Request, Response } from 'express';
/**
* Contrôleur pour la route GET /users
* Description : Renvoie un message avec la liste des utilisateurs (simulation)
* @param req - Objet représentant la requête HTTP (non utilisé ici)
* @param res - Objet permettant d'envoyer une réponse HTTP
*/
export const getUsers = (req: Request, res: Response) => {
res.json({ message: 'Liste des utilisateurs' }); // Envoie une réponse JSON avec un message
};
/**
* Contrôleur pour la route POST /users
* Description : Ajoute un nouvel utilisateur en récupérant les données du corps de la requête
* @param req - Objet représentant la requête HTTP contenant les données utilisateur
* @param res - Objet permettant d'envoyer une réponse HTTP
*/
export const addUser = (req: Request, res: Response) => {
    const { name, email } = req.body; // Récupération des données envoyées dans le corps de larequête
// Envoie une réponse JSON confirmant l'ajout de l'utilisateur
res.json({ message: `Utilisateur ${name} ajouté avec succès !`, email });
};