const request = require('supertest')('http://localhost:8000');
const fs = require('fs');
const path = require('path');
const host = 'http://localhost:8000';
const port = process.env.port || 8000;

describe('db unit tests', () => {
  //tests userController.verify method
  describe('POST /verifyUser', () => {
    it('returns status code 200 if username/pw match user in db', (done) => {
      const user = { username: 'Bob', password: '1234' }
      request.post('/verifyUser')
        .send(user)
        .expect(200, done)
    });
    it('returns 401 if username/pw do not exist in database', (done) => {
      //change username and password for every new test
      const user = { username: 'user2', password: '123' }
      request.post('/verifyUser')
        .send(user)
        .expect(401, done)
    });
  });
  describe('POST /createUser', () => {
    //tests userController.create method
    it('return 200 if new user has been added to the db', (done) => {
      //change username and password for every new test
      const user = { username: 'user3', password: '123' }
      request.post('/createUser')
        .send(user)
        .expect(200, done)
    });
    it('return 400 if user already exists', (done) => {
      const user = { username: 'Bob', password: '1234' }
      request.post('/createUser')
        .send(user)
        .expect(400, done)
    });
  });
});