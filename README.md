# The Punu Corner

Bienvenue dans le projet **The Punu Corner**, un magazine digital artistique et indépendant. Il met en avant l’art, la mode, la beauté et la création contemporaine à travers un univers éditorial fort et une direction artistique précise.  
Ce README est là pour t’aider à comprendre la structure actuelle du projet, et surtout, à bien continuer dans la même logique visuelle et technique.

---

##  Avant de commencer

Merci de bien suivre les points suivants pour assurer la cohérence du projet :

-  **Respecter la typographie imposée** :  
  - *Playfair Display* pour les titres  
  - *Montserrat* pour les textes  
  *(Les polices sont déjà intégrées via Google Fonts dans le code)*

-  **Suivre la convention CSS BEM** avec le préfixe `.punu-` pour chaque classe.  
  Exemple : `.punu-header-title`, `.punu-featured-grid`, etc.

-  **Ne pas modifier les parties déjà validées** :  
  - `index.html`, `header.html`, `footer.html`, `layout.js`, etc.

-  **Continuer les pages avec la même structure et style** que celles déjà faites :  
  - `creativeStudio.html`, `fashion.html`, `beauty.html`, etc.

-  **Toujours vérifier que le site reste responsive** (ordinateur, tablette, mobile)

- **Consulter les documents fournis** dans le dossier `docs/` :
  - `Fiche_Typographique_Punu_Corner.pdf`
  - `Documentation_Technique_Punu_Corner.pdf`

---

## Stack technique

### Frontend
- HTML5 / CSS3 (BEM naming avec préfixe `.punu-`)
- W3.CSS pour la grille et le responsive
- JavaScript (`layout.js` pour les includes dynamiques)
- Google Fonts : Playfair Display + Montserrat
- Design responsive
- Accessibilité de base et SEO-friendly

### Backend
- Node.js avec Express
- Fichier `server.js` pour lancer un serveur local
- Préparation de endpoints pour future gestion (ex : newsletter)
- Données JSON dans `/data/`

---

##  Organisation du projet

attempt 3/
├── Backend/
│ ├── server.js
│ ├── package.json
│ ├── data/
├── Frontend/
│ ├── index.html
│ ├── header.html / footer.html
│ ├── layout.js
│ ├── theCorner.html / subscribe.html / admin.html
│ ├── creativeStudio.html / beauty.html / fashion.html
│ ├── css/
│ │ ├── style.css / header.css / footer.css / ...
│ ├── Photos/
├── docs/
│ ├── Fiche_Typographique_Punu_Corner.pdf
│ └── Documentation_Technique_Punu_Corner.pdf

yaml
Copy
Edit

---

## Comment lancer le projet en local

### 1. Cloner le projet ou ouvrir le dossier existant

```bash
cd Backend
npm install
node server.js
→ Le serveur sera lancé sur http://localhost:3000

Tu peux maintenant ouvrir index.html avec ton navigateur pour naviguer.

Pages déjà développées
index.html : page d'accueil

creativeStudio.html : page studio

fashion.html : page mode

beauty.html : page beauté

admin.html : panneau d'administration

subscribe.html : formulaire d'inscription

theCorner.html : autre page éditoriale

header.html / footer.html : inclusions dynamiques

CSS : style.css, header.css, footer.css, beauty.css, etc.

JS : layout.js (gestion des includes)

📌 À faire (TODO)
 Ajouter le backend complet pour la newsletter

 Lier les formulaires à une base de données (fichier JSON ou MongoDB)

 Ajouter des animations fluides et transitions

 Préparer l'intégration dans un CMS (WordPress ou autre)

 Créer les nouvelles pages dans le même esprit visuel

Projet initié par
Jana Chehwan
Étudiante en MIAGE – Université Paris-Saclay
jana26chehwan@gmail.com
linkedin.com/in/jana-chehwan
