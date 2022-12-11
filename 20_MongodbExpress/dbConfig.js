const mongodb=require('mongodb');
const dbName='test';  //databse name
const dbUrl=`mongodb+srv://root10:root10@cluster0.vzavvge.mongodb.net/${dbName}`
const MongoClient=mongodb.MongoClient;

module.exports -{dbName,dbUrl,mongodb,MongoClient}