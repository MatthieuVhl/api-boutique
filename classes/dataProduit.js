import { Produits } from "./produit";

export class DataProduits {
  constructor() {
    this.produits = [];
    this.compteur = 0;
    this.fichier = "produit.json";
  }

  ajouterProduits(titre, prix, stock) {
    const produit = new Produits(++this.compteur, titre, prix, stock);
    this.produits.push(produit);
    appendFileSync(
      this.fichier,
      `${produit.titre};${produit.prix};${produit.stock}\n`
    );
  }

  readProduit() {
    const produit = readFileSync(this.file).toString();
    this.produits = JSON.parse(produit);
    this.count =
      this.produits[this.produits.length - 1] != undefined
        ? this.produits[this.produits.length - 1].id
        : 0;
  }

  recupProduits(id) {
    return this.produits.find((p) => p.id == id);
  }
}
