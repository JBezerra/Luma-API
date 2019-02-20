class Webhook {
  constructor() {
    // Auth Infos to Access the database
    this.admin = require("firebase-admin");
    this.admin.initializeApp({
      credential: this.admin.credential.cert("./firebase-secret.json"),
      databaseURL: "https://luma-eefb8.firebaseio.com"
    });

    this.child = this.admin.database().ref().child('chat_collec');
  }

  // Create a User in DB
  add(chat_id, nome, cpf, telefone, idade, genero, placa) {
    var adcionar = this.child.push();
    adcionar.set({
      "chat_id": chat_id,
      "nome": nome,
      "cpf": cpf,
      "telefone": telefone,
      "idade": idade,
      "genero": genero,
      "placa": placa
    });
  }

  // Update values of the user
  creteOrUpdate(chat_id, nome, cpf, telefone, idade, genero, placa) {
    let admin = this.admin;
    let child = this.child;
    return new Promise(function (resolve, reject) {
      child.orderByChild("chat_id").equalTo(chat_id).on("child_added", function (snapshot) {
        let key = snapshot.key;
        let update = admin.database().ref().child('chat_collec/' + key);

        if (nome) {
          update.update({
            "chat_id": chat_id,
            "nome": nome
          });
        }

        if (cpf) {
          update.update({
            "chat_id": chat_id,
            "cpf": cpf
          });
        }

        if (telefone) {
          update.update({
            "chat_id": chat_id,
            "telefone": telefone
          });
        }

        if (idade) {
          update.update({
            "chat_id": chat_id,
            "idade": idade
          });
        }
        if (genero) {
          update.update({
            "chat_id": chat_id,
            "genero": genero
          });
        }
        if (placa) {
          update.update({
            "chat_id": chat_id,
            "placa": placa
          });
        }


        resolve(200);
      }, function (errorObject) {
        console.log(errorObject.code);
        reject(errorObject)
      });
    });
  }
}

module.exports = Webhook;

