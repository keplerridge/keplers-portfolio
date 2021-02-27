const express = require('express'),
      app = express(),
      port = 3333;

app.use(express.json());

app.listen(port, () => console.log('Listening on port ' + port))