var express = require('express');

var port = 3000;

var app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/',function(req,res){
    res.render('index');
});

app.listen(port,function(){
    console.log('Sever listening 3000'+ port);
})