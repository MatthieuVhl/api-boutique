import { Clients } from "./client";

export class DataClients {
  constructor() {
    this.clients = [];
    this.compteur = 0;
    this.fichier = "client.json";
  }

  ajouterClients(nom, prenom, telephone) {
    const client = new Clients(++this.compteur, nom, prenom, telephone);
    this.clients.push(client);
    appendFileSync(
      this.fichier,
      `${client.id};${client.nom};${client.prenom};${client.telephone}\n`
    );
  }

  readClients() {
    const client = readFileSync(this.file).toString();
    this.clients = JSON.parse(client);
    this.count =
      this.todos[this.clients.length - 1] != undefined
        ? this.todos[this.clients.length - 1].id
        : 0;
  }

  recupClients(id) {
    return this.clients.find((c) => c.id == id);
  }
}
