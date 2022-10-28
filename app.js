const express = require("express");
const app = express();

const Mainrouter = require("./src/main-router/main-router");

app.use(express.json());
app.use('/', Mainrouter);


 app.use((req, res) => {
     res.status(404).send("Something is wrong");
 })

app.listen(process.env.PORT || 3000);