const express = require("express");
const app = express();
const port = 8080;
app.use(express.static('public'));
app.set("view engine","ejs");
const followers = ["simpal","adam","bob"];
app.get("/ig/:username",(req,res)=>{
    const instaData = require("./data(1).json");
  
    let {username} = req.params;
    const data = instaData[username];
    if (data) {
        res.render("instagram", { username, followers, data });
    } else {
        res.status(404).send("User not found"); 
    }
});
app.listen(port , ()=>{

    console.log(`listening on port ${port}`);
});
