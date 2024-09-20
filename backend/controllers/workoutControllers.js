const Workout = require('../models/Workout')
const mongoose = require('mongoose')
const sendEmail = require('../emailService');
//get all workouts

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
  
    res.status(200).json(workouts)
  }
  

//get single workout

const getWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findById(id)
  
    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }
//create new workout

const createWorkout = async(req, res) => {
  const { title, load, reps } = req.body;

  try {
      const workout = await Workout.create({ title, load, reps });

      // Send an email after creating the workout
      sendEmail(
          'mowsikan08@gmail.com', // Replace this with the user's email dynamically if needed
          'New Workout Added', // Email subject
          `You have added a new workout: ${title} with ${reps} reps and ${load} kg load.` // Email body
      );

      res.status(200).json(workout);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

//delete workout

const deleteWorkout = async (req,res) => {
  const {id} = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id:id})

  if(!workout){
    return res.status(400).json({error:'No such workout'})
  }

  res.status(200).json(workout)
}

//uppdate workout

const updateWorkout = async (req,res)=> {
  const {id} = req.params

    
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndUpdate({_id:id},{
    ...req.body
  })
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}