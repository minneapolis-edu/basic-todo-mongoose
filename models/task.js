var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema ({

  name: String,
  completed : Boolean

});

//TODO _id created automatically?


var Task = mongoose.model('Task', taskSchema);

module.exports = Task;