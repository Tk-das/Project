const {createCustomer,getAllCustomer} = require("../controllers/customer.controller.js");

const express = require("express");
const router = express.Router();

router.post("/",createCustomer);
router.get("/",getAllCustomer);

module.exports = router
