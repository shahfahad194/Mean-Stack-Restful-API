var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("friendsme");
  var myobj = { name: "tom", email: "shahfahad.1994@gmail.com" , password : "1234", birthday :"10/03/2018", gender :"male" };
  dbo.collection("contactlist").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});