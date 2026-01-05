const {createItem,getAllItem,updateItem} = require("../controllers/item.controller.js");

const express = require("express");
const router = express.Router();

router.post("/",createItem);
router.get("/",getAllItem);
router.put("/:id",updateItem);

module.exports = router