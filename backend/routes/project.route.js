const {createProject,getAllCustomer,updateProject} = require("../controllers/project.controller.js");

const express = require("express");
const router = express.Router();

router.post("/",createProject);
router.get("/",getAllCustomer);
router.put("/:id",updateProject);

module.exports = router