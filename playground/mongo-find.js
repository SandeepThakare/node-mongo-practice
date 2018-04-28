const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if(err) {
        return console.log('Can not connected with db', err);
    }

    console.log('Connected with sever');

    let db = client.db('sandy');

    db.collection('User').find({completed: true}).toArray().then((result) => {
        console.log('User');

        console.log(JSON.stringify(result, undefined, 2));
    })
    .catch((err) => {
        console.log('Can not connected with db. Error JSON: ', JSON.stringify(err, undefined, 2));
    })

    client.close();

})