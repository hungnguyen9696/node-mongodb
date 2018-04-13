//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err) {
        console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    db.collection('Todos').find().count().then((count)=> {
        console.log(`Todos count: ${count}`);
        
    }, (err)=> {
        console.log('unable to fetch todos', err);
    });

    db.collection('Users').find({
        name: "hung"
    }).toArray().then((docs)=> {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=> {
        console.log('unable to fetch todos', err);
    });
});