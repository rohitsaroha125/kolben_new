  var express = require('express');
  var app = express();
  var router = express.Router();
  var jsonfile = require('jsonfile');
  var request = require('request');
  var mammoth = require('mammoth');
  var productTypes = require('./productTypes.json');
  var bodyParser = require('body-parser')
  var pastLoad, json;
  var fs = require('fs');
  var rp = require('request-promise');
  const MongoClient = require('mongodb').MongoClient;
  const url = "mongodb://localhost:27017/kolben";
  const {
      readdirSync,
      statSync
  } = require('fs')
  const {
      join
  } = require('path')
  var arr = [];

  var mainPath = "views/kolben_first_draft/products/";
  var mainPathToDisp = "products/";
  const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
  const file = p => readdirSync(p).filter(f => statSync(join(p, f)).isFile())
  var directories = dirs("views/kolben_first_draft/products");
  var types = ['motors', 'pumps', 'valves', 'electronics']
  for (var i in directories) {
      var item = dirs(mainPath + directories[i]);
      var brand = directories[i];
      var path = mainPath + directories[i];
      var pathToDisp = mainPathToDisp + directories[i];
      for (var j in item) {
          var setTrue = false;
          var files = file(path + "/" + item[j]);
          var images = files.filter(w => w.match(/(jpg|jpeg|png|gif|PNG|JPG|JPEG)/));
          var docs = files.filter(w => w.match(/(pdf|PDF)/));
          var specs = files.filter(w => w.match(/(docx|doc|txt|DOCX|DOC|TXT)/))
          var items = {
              type: "unknown",
              displacement: "fixed",
              brand: brand,
              products: item[j],
              mainPath: pathToDisp + "/" + item[j],
              images: images,
              docs: docs,
              specs: specs
          }
          for (var k in productTypes) {
              var thisItem = productTypes[k][0].toLowerCase().trim();
              var itemToCompare = item[j].toLowerCase().trim();
              if (thisItem.includes(itemToCompare) || itemToCompare.includes(thisItem)) {
                  items.type = productTypes[k][1].trim();
              }
          }

          arr.push(items)
      }
  }

  var options = {
      styleMap: ["table => table.table.table-striped.table-condensed",
          "tr:first-child => tr.tr-first"
      ],
      convertImage: mammoth.images.imgElement(function(image) {
          return image.read("base64").then(function(imageBuffer) {
              return {
                  src: "data:" + image.contentType + ";base64," + imageBuffer
              };
          });
      })
  }
  arr.forEach((item) => {
          if (item.specs.length > 0)
              var promise = mammoth.convertToHtml({
                  path: "views/kolben_first_draft/" + item.mainPath + "/" + item.specs[0]
              }, options).then((e) => item.html = e.value).done()

      })
      // var promises = [];
      // for(var i in arr){
      //   var item = arr[i]
      //   for (var j in item.specs){
      //       var promise = mammoth.convertToHtml({path:"views/kolben_first_draft/"+item.mainPath+"/"+item.specs[j]})
      //       promises.push(promise);
      //   }
      // }
      //   Promises.all(promises);
  MongoClient.connect(url, function(err, client) {
      if (err) throw err;
      var db = client.db('kolben');
      db.collection("products").drop();
      db.collection("products").insert(arr).then(function(err, res) {
          console.log(res);
      })
  })


  // db.collection("products").insert(arr).then(function(err,res){
  //     console.log(res);
  // })
  // var item = {
  //   type:"motor",
  //   brand:"BlackBruin",
  //   product:"BB",
  //   link:"products/BlackBruin/BB Series/BB MOTOR.pdf"
  // }
  //
  // db.createCollection("products",function(err,res){
  //   if (err) throw err;
  //   console.log("Success "+res);
  // })