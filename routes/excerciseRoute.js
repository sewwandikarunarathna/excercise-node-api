
const express = require("express")
const excerciseRoutes = express.Router();
const { createExcercise, getAllExcercises, getExcercise, updateExcercise, deleteExcercise } =require("../controllers/excerciseController");

//create excercise
excerciseRoutes.post("/excercise/create", createExcercise);

//get all excercises
excerciseRoutes.get("/excercise/all", getAllExcercises);

//get excercise by id
excerciseRoutes.get("/excercise/:id", getExcercise);

//update excercise by id
excerciseRoutes.put("/excercise/update/:id", updateExcercise);

//delete excercise by id
excerciseRoutes.delete("/excercise/delete/:id", deleteExcercise);

module.exports = excerciseRoutes;