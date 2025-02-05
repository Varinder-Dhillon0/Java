const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
const bodyParser = require("body-parser");

app.set('views', path.join(__dirname, 'views')) 
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/" , (req,res) =>{

    res.render("formview");
})

app.post("/user" , (req,res) =>{

    console.log(req.body)
    const { username, password } = req.body;

    db.query("INSERT INTO user VALUES (?, ?);", [username,password], (err, result) => {
        if (err) return res.status(500).send("Database error" + err);
        res.render("formview", {msg : "User added successfully"});
    });
})

app.listen(5000, () =>{
    console.log("Running on http://localhost:5000/");
})