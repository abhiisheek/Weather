var express = require('express');

var app = express();
cont PORT = process.env.PORT;

app.use((req, res, next) => {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log("Server is up and running on port "+ PORT);
});
