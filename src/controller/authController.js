const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "User Alread Exists",
      });

    const { firstName, lastName, email, password, mobileNumber, collegeName } =
      req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      role: "user",
      mobileNumber,
      collegeName,
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Writing to database Failed",
        });
      }
      if (data) {
        return res.status(201).json({
          message: "User Created Succesfully",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error)
      return res.status(400).json({
        error,
      });
    if (user) {
      if (user.authenticate(req.body.password) && user.role === "user") {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "14d",
          }
        );
        const {
          firstName,
          lastName,
          email,
          role,
          fullName,
          mobileNumber,
          collegeName,
        } = user;
        res.cookie("token", token, { expiresIn: "14d" });
        res.status(201).json({
          token,
          user: {
            firstName,
            lastName,
            email,
            role,
            fullName,
            mobileNumber,
            collegeName,
          },
        });
      } else {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(400).json({
        message: "Something Went Wrong",
      });
    }
  });
};
