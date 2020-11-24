var express = require('express');
var app = express();
var router = express.Router();
var jsonfile = require('jsonfile');
var multer = require('multer');
var ObjectID = require('mongodb').ObjectID;
var request = require('request');
var bodyParser = require('body-parser')
var pastLoad, json;
var fs = require('fs');
var rp = require('request-promise');
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "views/kolben_first_draft/uploaded-images");
    },
    filename: function(req, file, callback) {
        callback(null, "newsitem" + "_" + Date.now() + "_" + file.originalname.split(' ').join('_').trim());
    }
});
var upload = multer({
    storage: Storage
}).single("imageup"); //Field name and max count

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
app.set('port', (process.env.PORT || 80));
app.use(express.static(__dirname + '/views/kolben_first_draft'));
var i = 0;
app.set('view engine', 'ejs');
app.on('listening', function() {
    // server ready to accept connections here
});
app.get('/', function(request, response) {
    response.render('kolben_first_draft/index.html')
})
app.get('/login', function(request, response) {
    app.use(express.static(__dirname + '/views/template'));
    response.render('template/login');
})

app.get('/kolben-login', function(request, response) {
    app.use(express.static(__dirname + '/views/template'));
})
app.get('/news', function(request, response) {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var db = client.db('kolben');
        var cursor = db.collection('news').find()
        cursor.toArray(function(err, data) {
            response.render('kolben_first_draft/news', {
                news: data
            })
        })
    })
})
app.get('/product', function(request, response) {
    app.use(express.static(__dirname + '/views/kolben_first_draft'));
    if (request.query.id) {
        console.log("Id found : " + request.query.id)
        MongoClient.connect(url, function(err, client) {
            if (err) throw err;
            var db = client.db('kolben');
            var query = {
                _id: ObjectID(request.query.id.toString())
            }
            console.log(query)
            var cursor = db.collection('products').find(query)
            cursor.toArray(function(err, data) {
                console.log(data);
                response.render('kolben_first_draft/singleProd', {
                    products: data
                })
            })
        })
    } else {
        MongoClient.connect(url, function(err, client) {
            if (err) throw err;
            var db = client.db('kolben');
            var cursor = db.collection('products').find()
            cursor.toArray(function(err, data) {
                response.render('kolben_first_draft/product', {
                    products: data
                })
            })
        })
    }
})
app.get('/news-art', function(request, response) {
    app.use(express.static(__dirname + '/views/template'));
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var db = client.db('kolben');
        var cursor = db.collection('news').find()
        cursor.toArray(function(err, data) {
            response.render('template/index', {
                data: data
            })
        })
    });

})
app.get('/mongo', function(request, response) {
    var newsitem = {
        id: i,
        title: "This is a news farticle",
        desc: "This is a generic A",
        image: "http://placehold.it/700x350",
        author: "author details",
        date: "date of the article",
        sdesc: "Small desc to show before a read more a tag"
    }
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var db = client.db('kolben');
        var cursor = db.collection('news').find()
        cursor.toArray(function(err, dat) {
            if (err) throw err;
            response.send(dat);
        })
    })
})

app.get('/product-db', function(request, response) {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var db = client.db('kolben');
        var cursor = db.collection('products').find()
        cursor.toArray(function(err, dat) {
            if (err) throw err;
            response.send(dat);
        })
    })
})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/insert-data', function(req, response) {
    upload(req, response, function(err) {
        console.log(req.file);
        if (!req.file) {
            var newsitem = {
                id: "boo",
                title: req.body.title,
                desc: req.body.desc,
                image: req.body.url,
                author: "Blank",
                date: new Date().toUTCString(),
                sdesc: "Small desc to show before a read more a tag"
            }
            MongoClient.connect(url, function(err, client) {
                if (err) throw err;
                var db = client.db('kolben');
                db.collection('news').insert(newsitem, function(err, dat) {
                    if (err) throw err;
                    response.redirect('back')
                })
            })
        } else {
            console.log("POST /insert-data");
            if (err) {
                console.log("Something went wrong!");
                throw err
            }
            console.log("File uploaded sucessfully!.");
            var newsitem = {
                id: "boo",
                title: req.body.title,
                desc: req.body.desc,
                image: "uploaded-images/" + req.file.filename,
                author: "Author",
                date: new Date().toUTCString(),
                sdesc: "Small desc to show before a read more a tag"
            }
            MongoClient.connect(url, function(err, client) {
                if (err) throw err;
                var db = client.db('kolben');
                db.collection('news').insert(newsitem, function(err, dat) {
                    if (err) throw err;
                    response.redirect('back')
                })
            })
        }
    })
})

app.post('/delete-data', function(req, response) {
    console.log("POST /delete-data");
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        var db = client.db('kolben');
        req.body["id"].forEach(function(elem, i) {
            var doc = {
                "_id": new ObjectID(elem)
            }
            console.log(doc)
            db.collection('news').deleteOne(doc, function(err, dat) {
                if (err) throw err;
                console.log(dat.result + dat.deletedCount);
            })
        })
        response.redirect('back')
    })
})



app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

process.on('uncaughtException', function(err) {
    console.log(err);
});
