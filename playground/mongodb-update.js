// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58f0e067bf3680d9bf77502f')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log('Todo:');
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todo', err);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58efec09dbf35c072cfb1101')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log('User:');
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch user', err);
  });

  // db.close();
});
