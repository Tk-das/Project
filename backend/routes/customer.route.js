const {createCustomer,getAllCustomer,updateCustomer} = require("../controllers/customer.controller.js");

const express = require("express");
const router = express.Router();

router.post("/",createCustomer);
router.get("/",getAllCustomer);
router.put("/:id",updateCustomer);

module.exports = router
