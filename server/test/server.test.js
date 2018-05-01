const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');
const {app} = require('./../server');
const {User} = require('./../models/users');

beforeEach((done) => {
    User.remove({}).then(() => done());
})

describe('POST /users', () => {

    it('should create new user', (done) => {
        let id = null;
        let sendobj = {
            personal : {
                firstname : "Tony",
                lastname : "Jinhy",
                age : 28
            },
            address : {
                houseno : 184,
                street : "184, road",
                state : "IA",
                country : "USA",
                zip: 45875
            }
        }

        request(app)
        .post('/user')
        .send(sendobj)
        .expect(200)
        .expect((res) => {
            expect(res.body.personal.firstname).toBe(sendobj.personal.firstname);
            console.log(res.body._id);
            id = res.body._id;
        })
        .end((err, res) => {
            if(err) {
                return done(err);
            }

            User.find()
            .then((result) => {
                // console.log(result)
                expect(result.length).toBe(1);
                expect(result[0].personal.firstname).toBe(sendobj.personal.firstname);
                done();
            })
            .catch((err) => {
                done(err)
            })
        })
    });

    it('it should return error', (done) => {
        let sendobj = {
            personal : {
                firstname : "Tony",
                lastname : "Jinhy",
                age : 28
            },
            address : {
                houseno : 184,
                street : "184, road",
                zip: 45875
            }
        }

        request(app)
        .post('/user')
        .send(sendobj)
        .expect(400)
        .end((err, res) => {
            if(err) {
                return done(err);
            }

            User.find()
            .then((result) => {
                // console.log(result)
                expect(result.length).toBe(0);
                done();
            })
            .catch((err) => {
                done(err)
            });
        });
    });
})