const express = require("express");
const User = require('../models/user');
const router = express.Router();
router.get("/create", (req, res, next) => {
    res.render('signup.ejs',{error:false,id:2})
});
router.post("/create", (req, res, next) => {
      const user = new User({
        fname: req.body.fname,
        lname: req.body.lname
      });
      user
        .save()
        .then(result => {
          res.render('signup.ejs',{error:false,id:1});
          res.redirect('/home');
        })
        .catch(err => {
        //   error=err.errors.email.message;
          console.log(err);
        res.render('signup.ejs',{error:true,id:1});
    });
  });
  module.exports = router;