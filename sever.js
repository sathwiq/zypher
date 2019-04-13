var express= require('express'),
    app= express(),
    bodyParser= require('body-parser'),
    mongoose    = require("mongoose");
    const userRoutes = require("./routes/user.js"),
          homeRoutes= require ("./routes/home");
mongoose.connect("mongodb+srv://a:1@cluster0-18p2h.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
.then(()=>{
    console.log('Connected to database');
  })
  .catch(()=>{
    console.log('Connection failed');
  });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use("/home", homeRoutes);
app.use("/user", userRoutes);
app.listen(3000,function(){
    console.log("its working");
})