const express = require("express");
const router = express.Router();

//routes
//get request to the root URL ("/")

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Express!" });
});

module.exports = router;
// This code defines a simple Express.js route that responds to GET requests at the root URL ("/"). When a request is made to this URL, it sends back a JSON response with a message "Hello from Express!" and a status code of 200 (OK). The router is then exported for use in other parts of the application.
