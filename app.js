const express = require("express");
const app = express();
const routes = require("./routes/routes.js");

//middlewares

app.use(express.json());
//for all routes starting with /, use the routes defined in routes/index.js
app.use("/", routes);

//running server

const PORT = process.env.PORT || 3000;
//when running ests, you dont need to start the actual server
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log("server running on port ", PORT);
  });
}
module.exports = app;
