
const express = require("express")
const excerciseRoutes = express.Router();
const { createExcercise, getAllExcercises, updateExcercise } =require("../controllers/excerciseController");

//create excercise
excerciseRoutes.post("/excercise/create", createExcercise);

//get all excercises
excerciseRoutes.get("/excercise/all", getAllExcercises);

//update excercise by id
excerciseRoutes.put("/excercise/update/:id", updateExcercise);

module.exports = excerciseRoutes;