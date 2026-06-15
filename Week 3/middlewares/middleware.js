const express = require("express");
const app = express();

app.get("/health-checkup",(req,res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "deepak" || password != "sharma"){
        res.status(400).json({
            msg: "User doesn't exist"
        });
        return;
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: "wrong inputs"
        });
        return;
    }

    res.send('Fine!')
})

app.listen(3000);