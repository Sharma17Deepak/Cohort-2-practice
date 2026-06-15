const express = require("express");
const app = express();

app.use(express.json()); 

app.post("/user", (req,res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Fine!");
})

//above code will give directly error so we can use global catches to show error to end user
app.use((err,req,res,next) => {
    res.status(500).send("Error Occured!");
})

app.listen(3000);