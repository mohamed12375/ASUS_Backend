const express = require('express');
const mongoose = require('mongoose');
const blogRoute = require("./Routes/blogs")

const app = express();

const DBuri = "mongodb+srv://mohamedkhaled12375:0926434574Mk@cluster0.zrlukjb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DBuri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(app.listen(4000))
    .catch(err => console.log(err));


//set view engine
// app.set('view engine', 'ejs');

// static files middleware
// app.use(express.static("public"));
// app.use(express.urlencoded({extended: true})); // so we can take form variables



//Blogs Route
app.use("/",blogRoute);


app.use((req,res) => {
    res.json({succed : false});
    //res.status(404).render("404",{title: "404"});
    
});
