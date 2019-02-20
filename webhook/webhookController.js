var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


var Webhook = require('./webhook');
var db = new Webhook();

// Webhook to add people to the databse by the Dialogflow with the Bot
router.post('/webhook', function (req, res) {
  let params = req.body.queryResult.parameters;

  let chat_id = req.body.session;
  let nome = params.nome || null;
  let cpf = params.cpf || null;
  let telefone = params.telefone || null;
  let idade = params.idade || null;
  let genero = params.genero || null;
  let placa = params.placa || null;

  if (nome) {
    nome = nome.join(" ");
    db.add(chat_id, nome, null, null, null, null, null);

  }

  else if (cpf) {
    db.creteOrUpdate(chat_id, null, cpf, null, null, null,null).then((code) => {
      res.sendStatus(code)
    })
  }

  else if (telefone) {
    db.creteOrUpdate(chat_id, null, null, telefone, null, null,null).then((code) => {
      res.sendStatus(code)
    })
  }

  else if (idade) {
   db.creteOrUpdate(chat_id, null, null, null, idade, null,null).then((code) => {
      res.sendStatus(code)
    })
  }
  
  else if (genero) {
    db.creteOrUpdate(chat_id, null, null, null, null, genero,null).then((code) => {
      res.sendStatus(code)
    })
  }

  else if (placa) {
    db.creteOrUpdate(chat_id, null, null, null, null, null, placa).then((code) => {
      res.sendStatus(code)
    })
  }


});


module.exports = router;