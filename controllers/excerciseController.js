const e = require('express');
const fs = require('fs');

// path to our JSON file
const dataPath = './data/excerciseData.json' 

// util functions to reading and writing from our file system.
const saveExcerciseData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getExcerciseData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

//create new excercise
const createExcercise = (req, res) => {
 
    var existExcercises = getExcerciseData()

    //generate a random id for new excercise
    const newExcerciseId = Math.floor(100000 + Math.random() * 900000)
 
    const newExcercise = {
        "id": newExcerciseId,
      "title": req.body.title,
      "description": req.body.description,
      "createdBy": req.body.createdBy
    }
    existExcercises.excercises.push(newExcercise)

    saveExcerciseData(existExcercises); 
    res.send({success: true, msg: 'Excercise added successfully'})
};


//get all excercises
const getAllExcercises = (req, res) => {
    const excercises = getExcerciseData();
    res.send(excercises);
}


//get excercise by id
const getExcercise = (req, res) => {
    const existExcercises = getExcerciseData();

    // grab the excercise id from params
    const excerciseId = +req.params.id; //since params.id is a string (+) is used to make it number

    // find exercise using id
    var excercise = existExcercises.excercises.find(ex => {
    return ex.id === excerciseId;
    });

    res.send(excercise);
}


//update excercise by id
const updateExcercise = (req, res) => {
    var existExcercises = getExcerciseData()

    // Find the excercise to update
    const excerciseId = +req.params.id;

    // Check each exercise in the array for its ID
    var excerciseToUpdate = existExcercises.excercises.find(ex => {
    return ex.id === excerciseId;
    });

    // Update the excercise
    if (excerciseToUpdate) {
        Object.assign(excerciseToUpdate, req.body);
        console.log(`accounts with id ${excerciseId} has been updated`);
    } else {
        console.log(`Exercise with ID ${excerciseId} not found.`);
 }
 
 // save data back to the JSON file
 saveExcerciseData(existExcercises);
 res.send(`accounts with id ${excerciseId} has been updated`)
};

// delete excercise by id
const deleteExcercise = (req, res) => {
    var existExcercises = getExcerciseData()
      const excerciseId = +req.params.id;

      // Filter out the exercise with the given ID
      existExcercises.excercises = existExcercises.excercises.filter(exercise => exercise.id !== excerciseId);

      saveExcerciseData(existExcercises);
      res.send(`accounts with id ${excerciseId} has been deleted`)
}

module.exports = { createExcercise, getAllExcercises, getExcercise, updateExcercise,deleteExcercise }