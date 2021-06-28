
const orderModel = require('../model/OrderModel');

exports.placeOrder= (req, res) => {
    const {
       firstName,
       lastName,
       email,
       phoneNo,
       addressl1,
       addressl2,
       city,
       pincode,
       price,
       courseId,
       courseName
        
    } = req.body;
    
    const Order = new orderModel({
        firstName:firstName,
        lastName:lastName,
        addressl1:addressl1,
        addressl2:addressl2,
        postCode:pincode,
        city:city,
        phoneNo:phoneNo,
        email:email,
        price:price,
        courseId:courseId,
        courseName:courseName,
        purchaseSuccessful:'yes'
    });
    Order.save((error, Product) => {
        if (error) return res.status(400).json({ error });
        if (Product) return res.status(201).json({ Product });
      });
 
};
exports.getCourses=(req,res)=>{
    const emailId=decodeURIComponent(req.query.email);
    console.log(emailId);
    orderModel.find({email:emailId,purchaseSuccessful:'yes'}).exec((err,docs) =>{
        console.log(err);
        console.log("Course Success")
        // console.log(docs);
        return res.status(201).json({ docs});
    });
    
}