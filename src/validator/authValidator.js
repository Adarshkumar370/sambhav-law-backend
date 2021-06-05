const {
  check,
  validationResult
} = require("express-validator");


exports.validateSignupRequest = [
  check("firstName").notEmpty().withMessage("First Name is Required"),
  check("lastName").notEmpty().withMessage("Last Name is Requried"),
  check("email").isEmail().withMessage("A Valid Email is required"),
  check("password").isLength({
    min: 6
  }).withMessage("Password must be atleast 6 character long"),
  check("mobileNumber").isLength({
    min: 10
  }).withMessage("Invalid mobile Number"),
  check("mobileNumber").isLength({
    max: 10
  }).withMessage("Mobile Number not valid"),
  check("collegeName").notEmpty().withMessage("College Name is required")
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("A Valid Email is required"),
  check("password").isLength({
    min: 6
  }).withMessage("Password must be atleast 6 character long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0)
    return res.status(400).json({
      error: errors.array()[0].msg
    })

  next();
}