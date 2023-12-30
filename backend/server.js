require("dotenv").config();

const express = require("express");

//express app
const app = express();

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

//routes
app.get("/", (req, res) => {
	res.json({ mssg: "Welcome" });
});

//listen for requests
app.listen(process.env.PORT, () => {
	console.log("Starting on port", process.env.PORT, "...");
});
