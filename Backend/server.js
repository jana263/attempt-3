// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route GET pour lire les emails
app.get('/emails', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'emails.json');
  console.log("📁 Lecture du fichier :", filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erreur de lecture des emails.' });
    }

    try {
      const emails = JSON.parse(data);
      res.json({ success: true, emails });
    } catch {
      res.status(500).json({ success: false, message: 'Format JSON invalide.' });
    }
  });
});


// Route POST pour s'inscrire
app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  const dataDir = path.join(__dirname, 'data');
  const filePath = path.join(dataDir, 'emails.json');

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ success: false, message: 'Email invalide ou manquant.' });
  }

  // Ensure the data directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Ensure the emails.json file exists
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    let emails = [];
    if (!err && data) {
      try {
        emails = JSON.parse(data);
      } catch (parseErr) {
        return res.status(500).json({ success: false, message: 'Erreur de lecture JSON.' });
      }
    }

    if (emails.includes(email)) {
      return res.status(409).json({ success: false, message: 'Email déjà inscrit.' });
    }

    emails.push(email);

    fs.writeFile(filePath, JSON.stringify(emails, null, 2), err => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Erreur de sauvegarde.' });
      }

      res.status(200).json({ success: true, message: 'Inscription réussie. Merci !' });
    });
  });
});

// Sert les fichiers statiques après les routes personnalisées
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé : http://localhost:${PORT}`);
});
