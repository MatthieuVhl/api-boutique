import express from "express";
import { DataClients } from "./classes/dataClients.js";
import { DataCommandes } from "./classes/dataCommandes.js";
import { DataProduits } from "./classes/dataProduit.js";

const dataClients = new DataClients();
const dataProduits = new DataProduits();
const dataCommandes = new DataCommandes();

const app = express();

app.use(express.json());

app.get("/clients", (req, res) => {
  res.json(dataClients.clients);
});
app.get("/produits", (req, res) => {
  res.json(dataProduits.produits);
});
app.get("/commandes", (req, res) => {
  res.json(dataCommandes.commandes);
});

app.get("/clients/:id", (req, res) => {
  const client = dataClients.findTodoById(req.params.id);
  if (client != undefined) {
    res.json(client);
  } else {
    res.json({ message: "client non trouvé" });
  }
});

app.get("/produits/:id", (req, res) => {
  const produit = dataProduits.findTodoById(req.params.id);
  if (produit != undefined) {
    res.json(produit);
  } else {
    res.json({ message: "produit non trouvé" });
  }
});

app.get("/commandes/:id", (req, res) => {
  const commande = dataCommandes.findTodoById(req.params.id);
  if (commande != undefined) {
    res.json(commande);
  } else {
    res.json({ message: "commande non trouvé" });
  }
});

app.post("/clients", (req, res) => {
  const { nom, prenom, telephone } = req.body;
  dataClients.ajouterClients(nom, prenom, telephone);
  res.json({ message: "clients ajouté" });
});
app.post("/produits", (req, res) => {
  const { titre, prix, stock } = req.body;
  dataProduits.ajouterProduits(titre, prix, stock);
  res.json({ message: "produits ajouté" });
});
app.post("/commandes", (req, res) => {
  const { commande } = req.body;
  dataCommandes.ajouterCommande();
  res.json({ message: "commandes ajouté" });
});

app.listen(3000, () => {
  console.log("tous est ok !");
});
