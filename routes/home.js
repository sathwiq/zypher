const express = require("express");
const User = require('../models/user'),
Comment=require('../models/comments'),
Songs=require('../models/songs'),
artist=require('../models/artist');
const router = express.Router();
router.get("/", (req, res, next) => {
    Songs.find()
    
        .then(document=>{
            artist.find()
                .then(doc=>{
                    Comment.find()
                        .then(doc1=>{
                            res.render('home.ejs',{songs:document,error:false,artist: doc,comment:doc1 });
                        }
                        )
                    
                })
        });
});
router.post('/comments/:song',(req, res, next) => {
    var success=false;
    Songs.findOne({title: req.params.song})
        .then( document=>{
            // console.log(document[0].title );
            
            
                const comment = new Comment({
                    fname: req.body.fname,
                    text: req.body.text,
                    stitle: req.params.song
                  });
                  comment
                    .save()
                    .then (doc=>{success=true;
                        console.log(saved)}
                        

                    )
                    .catch(err => {
                        //   error=err.errors.email.message;
                          console.log(err);
                        
                    });
                    if(success){
                    res.render('success.ejs',{error:true,id:1})
                    }else{
                        res.render('error.ejs',{error:true,id:1});
                    }
           
        })
        .catch(err => {
            //   error=err.errors.email.message;
           
        });
        
});
module.exports = router;