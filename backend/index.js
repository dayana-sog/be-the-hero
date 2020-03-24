const express = require ('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    evento: 'Semana Omnistack',
    aluno: 'Dayana Gonçalves'
  });
});

app.listen(3333);