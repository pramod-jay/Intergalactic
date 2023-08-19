var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");
const dotenv = require("dotenv");
var app = express();

const mob_app_functions = require("./routes/routes");
const { SourceTextModule } = require("vm");



dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mob_app_functions);

//Listening to frontend
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 8000;

//Start server using environment variables
app.listen(PORT, () => {
  console.log("server started in port : ", PORT);
});

