const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    
    if(err) {
        return console.log('Can not connected with server');
    }

    let db = client.db('sandy');

    // db.collection('User').deleteMany({ Age: 26 }).then((result) => {
    //     console.log(result.result);
    // })
    // .catch((err) => {
    //     console.log('Unable to fetch the data form table, Error JSON: ', JSON.stringify(err, undefined, 2));
    // });

    // db.collection('User').deleteOne({ Age: 26 }).then((result) => {
    //     console.log(result.result);
    // })
    // .catch((err) => {
    //     console.log('Unable to fetch the data form table, Error JSON: ', JSON.stringify(err, undefined, 2));
    // });

    db.collection('User').findOneAndDelete({ 
        _id : new ObjectID('5ae6127cd086f74b663f46cf')
     }).then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log('Unable to fetch the data form table, Error JSON: ', JSON.stringify(err, undefined, 2));
    });

    client.close();

})