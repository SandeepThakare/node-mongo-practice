const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('Unable to connect with db')
    }

    console.log('connected with mongodb server');
    // console.log(db);

    let db = client.db('sandy');

    db.collection('User').insertOne({
        firstname: 'Sandy',
        lastname: 'Thakare',
        completed: true
    }, (err, result) => {
        if(err) {
            return console.log('Unable to add collection', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close();
    
})