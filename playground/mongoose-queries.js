const { ObjectID } = require('mongoose');
const { mongoose } = require('./../server/db/mongoose');
const { User } = require('./../server/models/users');

var id = '5ae85bfe67d3c263e2443244';

//not working
// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid'); 
// }

User.find({
    _id: id
}).then((result) => {
    console.log('Users -->', result)
    console.log('-------------------------------');
}).catch((err) => {
    console.log(err);
})

User.findOne({
    _id: id
}).then((result) => {
    console.log('Find One --> ', result)
    console.log('-------------------------------');
}).catch((err) => {
    console.log(err);
});

User.findById(id).then((result) => {
    if(!result){
        return console.log('Id not found !!!');
    }
    console.log('Find By Id', result);
}).catch((err) => {
    console.log(err);
});