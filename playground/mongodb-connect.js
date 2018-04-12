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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5acf62e9fe614815f0d8348a')
    // }).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //     console.log('unable to fetch todos', err);
    // });


    // db.collection('Users').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if(err){
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});