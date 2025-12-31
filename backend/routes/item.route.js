const {createItem} = require("../controllers/item.controller.js");

const express = require("express");
const router = express.Router();

router.post("/",createItem);

module.exports = router