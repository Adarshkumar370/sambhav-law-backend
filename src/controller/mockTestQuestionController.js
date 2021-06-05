const shortid = require('shortid');
const slugif = require('slugify');
const mockTestQuestionModel = require('../model/mockTestQuestionModel');

exports.createQuestion = (req, res) => {
    const {
       testId,
       sectionId,
       questionId,
       mainQuestion,
       question,
       optionA,
       optionB,
       optionC,
       optionD,
       correctAns,
       parentId
        
    } = req.body;
    
    const Question = new mockTestQuestionModel({
        testId:testId,
       sectionId:sectionId,
       questionId:questionId,
       mainQuestion:mainQuestion,
       question:question,
       optionA:optionA,
       optionB:optionB,
       optionC:optionC,
       optionD:optionD,
       correctAns:correctAns,
       parentId:parentId
    });
    Question.save((error, Ques) => {
        if (error) return res.status(400).json({ error });
        if (Ques) return res.status(201).json({ Ques });
      });
 
};
exports.getQuestions=(req,res)=>{
    const testid=decodeURIComponent(req.query.testId);
    console.log(testid);
    mockTestQuestionModel.find({testId:testid}).exec((err,docs) =>{
        console.log(err);
        console.log("question Success")
        // console.log(docs);
        return res.status(201).json({ docs});
    });
    
}