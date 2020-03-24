const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
  return res.json({
    evento: 'Semana Omnistack',
    aluno: 'Dayana Gonçalves'
  });
});

module.exports = routes;