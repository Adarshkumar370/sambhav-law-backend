const shortid = require('shortid');
const slugif = require('slugify');

const videoModel = require('../model/videoModel');

exports.createProduct = (req, res) => {
    const {
        videoTitle,
        videoDescription,
        category,
        videoLink,
        
    } = req.body;
    let filepath;
console.log(req.file.path)
  if(req.file.path)
  var thumbnail=req.file.path.split('\\').pop();
console.log(thumbnail);
    const video = new videoModel({
        videoTitle: videoTitle,
        videoDescription: videoDescription,
        videoLink: videoLink,
        category: category,
        videoThumbnail:thumbnail
    });
    video.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) return res.status(201).json({ product });
      });
 
};