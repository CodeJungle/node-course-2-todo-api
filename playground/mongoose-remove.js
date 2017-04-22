const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '58f4d7751b2d1e8805f692fe'}).then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('58f4d7751b2d1e8805f692fe').then((todo) => {
//   console.log(todo);
// });
