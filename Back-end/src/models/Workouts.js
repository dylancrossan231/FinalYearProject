const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WorkoutsSchema = new mongoose.Schema({


    workout_name: {
        type: String,
        unique: 'Workout Name Already Exists',
        required: 'Workout Name is required'
      },

     user_id:{
         type: Schema.Types.ObjectId,
         ref:"User"
     },
     created_date: {
        type: Date,
        default: Date.now 
     }

    });

module.exports = mongoose.model('Workouts', WorkoutsSchema)