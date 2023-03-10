import { Clients } from "./client";
import { Commande } from "./commande";
import { Produits } from "./produit";

export class DataCommandes {
  constructor() {
    this.commandes = [];
    this.compteur = 0;
    this.fichier = "commande.json";
  }

  ajouterCommande(Clients, Produits) {
    const commande = new Commande(++this.compteur);
    this.commandes.push(commande);
    appendFileSync(
      this.fichier,
      `${commande.id};${commande.Clients};${contact.Produits}\n`
    );
  }

  readCommande() {
    const commande = readFileSync(this.file).toString();
    this.commandes = JSON.parse(commande);
    this.count =
      this.commandes[this.commandes.length - 1] != undefined
        ? this.commandes[this.commandes.length - 1].id
        : 0;
  }

  recupCommande(id) {
    return this.contacts.find((c) => c.id == id);
  }
}
