const express = require("express");
const shortid = require("shortid");
const { createQuestion,getQuestions} = require("../controller/mockTestQuestionController");
const router = express.Router();
router.post("/question/create",createQuestion);
router.get('/question/get',getQuestions);
module.exports=router