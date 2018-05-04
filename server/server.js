

const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/user', (req, res) => {
    var user = new User({
        personal : req.body.personal,
        address : req.body.address
    });

    user.save().then((result) => {
        console.log(result)
        res.send(result);
    })
    .catch((err) => {
        console.log('Unable to add data due to following error: Error: ', JSON.stringify(err, undefined, 2));
        res.status(400).send(err);
    })

});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});

module.exports = {app};