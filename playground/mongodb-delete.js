// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todos', err);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo', err);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo', err);
  // });

  // Challenge 1
  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete users', err);
  // });

  // Challenge 2
  // db.collection('Users').findOneAndDelete({_id: new ObjectID('58f0bbea0cf311170cafee8a')}).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to delete user', err);
  // });

  // db.close();
});
