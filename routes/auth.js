/**
 * Imports
 */
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const jwtDecode = require("jwt-decode");

const util = require("util");
const jwtVerifyAsync = util.promisify(jwt.verify);

/**
 * Initialize router
 */
const router = express.Router();

/** Endpoints **\
 1) Get logged in user
 2) Login the user using email and password
 3) Delete cookie / logout the user
 4) Validate user if user is logged in
 */

// Routes in these file
/**
 * @route   GET api/auth
 * @desc    Get logged in user
 * @access  Private
 */
/**
 * @route   POST api/auth
 * @desc    Authorize user and get token
 * @access  Public
 */
/**
 * @route   DELETE api/auth
 * @desc    Delete cookie / logout
 * @access  Private
 */
/**
 * @route   POST api/auth/check
 * @desc    Validate user
 * @access  Public
 */

// GET api/auth
router.get("/", auth, async (req, res) => {
  // Extract user id from request
  const user_id = req.user_id;

  try {
    // Find user by id
    let user = await User.findOne({ _id: user_id });

    // If user not found
    if (!user) {
      return res.status(400).send({ errors: [{ msg: "User not found" }] });
    }

    // Store user data in response
    user = {
      firstName: user.firstName,
      lastName: user.lastName,
    };

    // Return user to the client
    return res.send(user);
  } catch (err) {
    // Return error
    return res.status(500).send({ errors: [{ msg: err.message }] });
  }
});

// POST api/auth
router.post(
  "/",
  [
    // Validate input
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    // Destructure request body
    const { email, password } = req.body;

    try {
      // Find user by email
      let user = await User.findOne({ email });

      // If user not found
      if (!user) {
        return res.status(400).send({ errorMsg: "User not found" });
      }

      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);

      // If password is incorrect
      if (!isMatch) {
        return res.status(400).send({ errorMsg: "Incorrect Credentials" });
      }

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
      return res.send("Logged in");
    } catch (err) {
      // Return error
      return res.status(500).send({ errors: [{ msg: err.message }] });
    }
  }
);

// DELETE api/auth
router.delete("/", auth, async (req, res) => {
  // Delete cookie
  res.clearCookie("token");

  // Send success message to client
  return res.send("Logged out");
});

// POST api/auth/check
router.get("/check", async (req, res) => {
  // Get token from cookies
  const token = req.cookies.token;

  // If no cookie
  if (!token) {
    // Return error
    res.clearCookie("token");
    return res.status(400).send("No token");
  }

  try {
    // Verify token
    jwt.verify(token, config.get("jwtSecret"));

    // Send success message to client
    return res.send("Valid");
  } catch (err) {
    // Return error
    res.clearCookie("token");
    return res.status(400).send("Invalid");
  }
});

// Get /api/auth/activate/
router.get("/activate", async (req, res) => {
  const { activateId } = req.query;
  console.log("token :::", activateId);
  let isExpired = false;
  let decodedToken;

  try {
    decodedToken = jwtDecode(activateId);
    console.log(decodedToken);
    await jwtVerifyAsync(activateId, process.env.jwtSecret);
    console.log("is Valid ", isExpired);
  } catch (err) {
    console.log("jwt is Expired");
    isExpired = true;
  }

  if (isExpired) {
    return res.status(400).send({ msg: "Activation Token Expired" });
  }

  const { firstName, lastName, email, password } = decodedToken;
  let user = await User.findOne({ email });
  // If user already exists give him authentication
  if (user) {
    return res.status(400).send({ msg: "Account already activated" });
  }

  user = new User({
    firstName,
    lastName,
    email,
    password,
  });

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  // Save user in the database
  await user.save();

  // Payload for JWT
  // const payload = {
  //   id: user.id,
  // };

  // // Sign JWT
  // const token = jwt.sign(payload, config.get("jwtSecret"), {
  //   expiresIn: 21600,
  // });

  // // Create an httpOnly cookie
  // res.cookie("token", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "development",
  //   secure: false,
  //   maxAge: 6 * 60 * 60 * 1000,
  // });
  return res.send("Account Activated");
});

module.exports = router;
