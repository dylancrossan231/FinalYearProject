const router = require('express').Router();
const verify = require('./verifyToken');
const Workout = require('../models/Workouts');
const User = require('../models/User');




router.post('/create', verify, async (req, res) => {


    const checkWorkoutname = await Workout.findOne({
        workoutName: req.body.workout_name
    });
    if (checkWorkoutname) return res.status(400).send("Workout Name Already exists");



    //new workout
    const workout = new Workout({
        workout_name: req.body.workout_name,
        user_id: user_id

    });
    try {
        const saveWorkout = await workout.save();
        res.send(req.body);
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/', verify, async (req, res) => {
    Workout.find(function (err, workouts) {
        if (err)
            res.send(err);

        res.json(workouts);
    });
});


router.delete('/:id', verify, (req, res, next) => {
    Workout.deleteOne({
        _id: req.params.id
    }).then(
        () => {
            res.status(200).json({
                workout: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});
router.put('/update/:id', verify, async (req, res) => {


    const checkWorkoutname = await Workout.findOne({
        workoutName: req.body.workout_name
    });
    if (checkWorkoutname) return res.status(400).send("Workout Name Already exists");

    Workout.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        })
        .then(
            () => {
                res.status(200).json({
                    workout: "Workout Updated"
                });
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
});
module.exports = router;
