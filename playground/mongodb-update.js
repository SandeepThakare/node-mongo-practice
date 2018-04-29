const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if(err) {
        return console.log('Unable to connect with server');
    }

    let db = client.db('sandy');

    // db.collection('User').findOneAndUpdate({
    //     _id: new ObjectID('5ae4243ad03ee02ba7a272f4')
    // }, {
    //     $set: {
    //         Age: 24
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })
    // .catch((err) => {
    //     console.log('Unable to fetch records. Error JSON: ', JSON.stringify(err, undefined, 2));
    // })

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5ae4243ad03ee02ba7a272f4')
    }, {
        $set: {
            lastname: 'Thakare'
        },
        $inc: {
            Age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log('Unable to fetch records. Error JSON: ', JSON.stringify(err, undefined, 2));
    })

    client.close();
})