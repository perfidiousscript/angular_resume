/**
 * Created by samuelmoss on 11/15/15.
 */
var express = require('express');
var path = require('path');
var app = express();

app.get('/*', function(req, res, next){
    var file = req.params[0] || './views/index.html';
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});