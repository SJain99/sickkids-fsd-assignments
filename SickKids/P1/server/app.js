const express = require("express")
const cors = require("cors")
const sha256 = require("js-sha256")

const app = express()
const port = 5000
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const matchPass = "1q2w3e";
let email = "";

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

app.get("/", (req, res) => {
    res.send({email: email});
})
  
app.post("/api/login", (req, res) => {
    if (req.body.email.match(emailFormat) && req.body.password === matchPass) {
        email = req.body.email;
        const accessToken = sha256(req.body.email + req.body.password);
        const returnInfo = {
            email: req.body.email,
            accessToken: accessToken
        }
        res.send(returnInfo);
    } else res.send({});
})
  
app.listen(port, (err) => {
    if (err) throw err
    console.log("Server created successfully on port ", port)
})