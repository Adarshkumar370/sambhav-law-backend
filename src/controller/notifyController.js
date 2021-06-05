
const notifyModel = require('../model/notifymeModel');

exports.notifyList= (req, res) => {
    const {
        email
    } = req.body;
   
    const notify = new notifyModel({
        email:email
    });
    notify.save((error, response) => {
        if (error) return res.status(400).json({ error });
        if (response) return res.status(201).json({ response });
      });
 
};