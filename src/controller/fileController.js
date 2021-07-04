const path = require('path');

exports.sendFile=(req,res)=>{
    var options = {
        root: path.join(__dirname ,'..','uploads','files','25')
    };
    console.log(options);
      
    var fileName = req.body.fileName;
    console.log(req.body.fileName);
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
};