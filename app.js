var express = require('express');
var app = express();

const path = require('path');
const router = express.Router();

app.get('/',function(req,res){
    // console.log(__dirname)
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about.html',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact.html',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});

//add the router
app.use('/', router);

app.listen(3000, function() {
    console.log('App listening on port 3000!');
  });