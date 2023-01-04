const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();  
const port = 3000;
const morgan = require("morgan");
const route = require("./routes/index");

// http logger
// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));


// Route init
route(app);

app.listen(port, () =>
  console.log(`Du an dang chay tai http://localhost:${port}`)
);
