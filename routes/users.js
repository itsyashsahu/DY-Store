/**
 * Imports
 */
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const { mailSender } = require("../Utils/mailSender");

/**
 * Initialize router
 */
const router = express.Router();

/** Endpoints **\
 1) Register a user
 2) Login of Signup a user with google
 */

// Routes in these file
/**
 * @route POST api/customer
 * @descriptoion signup with email and password
 * @access Public
 */

/**
 * @route POST api/loginwithgoogle
 * @descriptoion signup or login with google
 * @access Public
 */

// POST api/users/customer
router.post(
  "/customer",
  [
    // Validate input using express-validator
    check("firstName", "Please enter name").notEmpty(),
    check("lastName", "Please enter name").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array(),
        errorMsg: "Read logs or full response",
      });
    }

    // Destructure request body
    const { firstName, lastName, email, password } = req.body;

    try {
      // Find user by email
      let user = await User.findOne({ email });

      // If user already exists
      if (user) {
        // if user alreay exits had signned up with google
        // and has setted up the password throw error
        if (user.gid && user.password) {
          return res
            .status(400) // will use this to check the error in front end
            .send({ errors: errors.array(), errorMsg: "User already exists" });
        } else if (user.gid) {
          // if the user had signned in with google and has not settup up his password
          // update the password

          // Hash Password
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
          // Save user in the database
          await user.save();
          // Payload for JWT
          const payload = {
            id: user.id,
          };

          // Sign JWT
          const token = jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 21600,
          });

          // Create an httpOnly cookie
          res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            secure: false,
            maxAge: 6 * 60 * 60 * 1000,
          });

          // Send success message to client
          return res.send("Registered With Password");
        }

        // for other cases like
        // email already registered earlier using email and password option
        return res
          .status(400) // will use this to check the error in front end
          .send({ errors: errors.array(), errorMsg: "User already exists" });
      }

      // Means user does not exits so create a user and
      // store it to database

      // Create a new user

      // user = new User({
      //   firstName,
      //   lastName,
      //   email,
      //   password,
      // });

      // Hash Password
      // const salt = await bcrypt.genSalt(10);
      // user.password = await bcrypt.hash(password, salt);

      // Save user in the database
      // await user.save();

      // Payload for JWT
      const payload = {
        firstName,
        lastName,
        email,
        password,
      };

      // Sign JWT
      const token = jwt.sign(payload, config.get("jwtSecret"), {
        expiresIn: "30m",
      });

      mailSender(firstName, email, token)
        .then((response) => {
          console.log("mail has been send", response);
          return res.send("A Verification Email has been sent to your email");
        })
        .catch((err) => {
          console.log("Failed", err);
          return res
            .status(400)
            .send({ msg: "Server failed to send the message try again" });
        });
      // Create an httpOnly cookie
      // res.cookie("token", token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV !== "development",
      //   secure: false,
      //   maxAge: 6 * 60 * 60 * 1000,
      // });

      // Send success message to client
    } catch (err) {
      // Return error
      return res
        .status(500)
        .send({ errors: errors.array(), errorMsg: err.message });
    }
  }
);

// router.post(
//   "/customer",
//   [
//     // Validate input using express-validator
//     check("firstName", "Please enter name").notEmpty(),
//     check("lastName", "Please enter name").notEmpty(),
//     check("email", "Please include a valid email").isEmail(),
//     check(
//       "password",
//       "Please enter a password with 6 or more characters"
//     ).isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     // Validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).send({
//         errors: errors.array(),
//         errorMsg: "Read logs or full response",
//       });
//     }

//     // Destructure request body
//     const { firstName, lastName, email, password } = req.body;

//     try {
//       // Find user by email
//       let user = await User.findOne({ email });

//       // If user already exists
//       if (user) {
//         // if user alreay exits had signned up with google
//         // and has setted up the password throw error
//         if (user.gid && user.password) {
//           return res
//             .status(400) // will use this to check the error in front end
//             .send({ errors: errors.array(), errorMsg: "User already exists" });
//         } else if (user.gid) {
//           // if the user had signned in with google and has not settup up his password
//           // update the password

//           // Hash Password
//           const salt = await bcrypt.genSalt(10);
//           user.password = await bcrypt.hash(password, salt);
//           // Save user in the database
//           await user.save();
//           // Payload for JWT
//           const payload = {
//             id: user.id,
//           };

//           // Sign JWT
//           const token = jwt.sign(payload, config.get("jwtSecret"), {
//             expiresIn: 21600,
//           });

//           // Create an httpOnly cookie
//           res.cookie("token", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV !== "development",
//             secure: false,
//             maxAge: 6 * 60 * 60 * 1000,
//           });

//           // Send success message to client
//           return res.send("Registered With Password");
//         }

//         // for other cases like
//         // email already registered earlier using email and password option
//         return res
//           .status(400) // will use this to check the error in front end
//           .send({ errors: errors.array(), errorMsg: "User already exists" });
//       }

//       // Means user does not exits so create a user and
//       // store it to database
//       // Create a new user
//       user = new User({
//         firstName,
//         lastName,
//         email,
//         password,
//       });

//       // Hash Password
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(password, salt);

//       // Save user in the database
//       await user.save();

//       // Payload for JWT
//       const payload = {
//         id: user.id,
//       };

//       // Sign JWT
//       const token = jwt.sign(payload, config.get("jwtSecret"), {
//         expiresIn: 21600,
//       });

//       // Create an httpOnly cookie
//       res.cookie("token", token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV !== "development",
//         secure: false,
//         maxAge: 6 * 60 * 60 * 1000,
//       });

//       // Send success message to client
//       return res.send("Registered");
//     } catch (err) {
//       // Return error
//       return res
//         .status(500)
//         .send({ errors: errors.array(), errorMsg: err.message });
//     }
//   }
// );
// POST api/users/loginwithgoogle
router.post(
  "/loginwithgoogle",
  [
    // Validate input using express-validator
    check("gid", "Envalid Google Id").notEmpty(),
    check("firstName", "Please enter first name").notEmpty(),
    check("lastName", "Please enter last name").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
  ],
  async (req, res) => {
    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array(),
        errorMsg: "Read logs or full response",
      });
    }

    // Destructure request body
    const { gid, firstName, lastName, email } = req.body;

    try {
      // Find user by email
      let user = await User.findOne({ email });

      // If user already exists give him authentication
      if (user) {
        // Payload for JWT
        const payload = {
          id: user.id,
        };

        // Sign JWT
        const token = jwt.sign(payload, config.get("jwtSecret"), {
          expiresIn: 21600,
        });
        // Create an httpOnly cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          secure: false,
          maxAge: 6 * 60 * 60 * 1000,
        });
        return res.send("User Already Exits Loggin you in");
      }

      // else create a user and save it to database
      // Create a new user
      user = new User({
        gid,
        lastName,
        firstName,
        email,
      });

      // Payload for JWT
      const payload = {
        id: user.id,
      };

      // Sign JWT
      const token = jwt.sign(payload, config.get("jwtSecret"), {
        expiresIn: 21600,
      });

      // Save user in the database
      await user.save();

      // Create an httpOnly cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        secure: false,
        maxAge: 6 * 60 * 60 * 1000,
      });

      // Send success message to client
      return res.send("Registered");
    } catch (err) {
      // Return error
      return res.status(500).send({
        errors: errors.array(),
        errorMsg: err.message,
      });
    }
  }
);

module.exports = router;
