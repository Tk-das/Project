const {createProject,getAllCustomer} = require("../controllers/project.controller.js");

const express = require("express");
const router = express.Router();

router.post("/",createProject);
router.get("/",getAllCustomer);

module.exports = router