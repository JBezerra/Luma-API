var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var detranAPI = require("sinesp-api");


var Webhook = require('./webhook');
var db = new Webhook();

router.get('/teste', function (req, res) {
  db.creteOrUpdate(123, "jose", null, null, null);

});

router.post('/webhook', function (req, res) {
  

  let params = req.body.queryResult.parameters;
  let text = req.body.queryResult.fulfillmentText;

  let chat_id = req.body.session;
  let nome = params.nome || null;
  let cpf = params.cpf || null;
  let telefone = params.telefone || null;
  let idade = params.idade || null;
  let genero = params.genero || null;
  let placa = params.placa || null;


  // if (text == "✅ Beleza! Irei passar pra o João e ele te responderá no máximo em 24h.") {
  //   placa = req.body.queryResult.queryText;    
  // }


  if (nome) {
    nome = nome.join(" ");
    
    //HARD-CODED AGE REMOVE!!!
    db.add(chat_id, nome, null, null, 18, null, null);

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