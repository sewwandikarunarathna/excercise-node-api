// Route.js
const express = require("express")
const router = express.Router();
const fs = require('fs');

// import and use account route
const excerciseRoutes = require('./excerciseRoute.js') 
router.use(excerciseRoutes)

module.exports = router;