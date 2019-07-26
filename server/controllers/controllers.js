const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");


module.exports = {
    getAll: (req, res)  => {
        Pet.find({}, (err, petsinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", pets :petsinDB});
            }
        }) .sort({type:1});


     
    },

    getOne: (req, res)  => {
        Pet.findById({_id: req.params.id}, (err, petsinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", pets :petsinDB});
            }
        });
     
    },


       create: (req, res) => {
        let random = Math.floor((Math.random() * 100000000) + 1);
        console.log(random)
        var user = new Pet({ id: random , name: req.body.name, qty: req.body.qty, price: req.body.price });
        user.save((err, petsinDB) =>{

            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", pets :petsinDB});
            }
        });
        },
 
   
    // create: (req, res) => {
        
    //     var user = new Pet(req.body);
    //     user.save((err, petsinDB) =>{
    //         if(err) {
    //             console.log(err);
    //             res.json({message: "Error", error: err});
    //         }
    //         else {
    //             res.json({message: "success", pets :petsinDB});
    //         }
    //     });
 
    // },

    // create: (req, res) => {
    //     Task.create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
        
    
    // },



    update: (req, res) => {
        console.log("**********")
        Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators:true, context:'query'}, (err, petsinDB) => {  
            console.log("**********")
            
                if(err) {
                    console.log(err);
                    res.json({message: "error", error:err});
                } 
                else { 
                    res.json({message: "Success", pets :petsinDB});
                }
                })
              },
            
    delete: (req, res) => {
        Pet.findByIdAndDelete({_id: req.params.id}, (err) => {
            if(err) {
                console.log(err);
                res.json({message: "error", error:err});
            } 
            else { 
                res.json({message: "Success"});
            }
        })
    },

    addLike: (req, res) => {
        Pet.findByIdAndUpdate({_id: req.params.id}, {$set:{likes: req.body.likes}}, {runValidators:true, context:'query'}, (err, petsinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "error", error:err});
            } 
            else { 
                res.json({message: "Success", pets :petsinDB});
            }
        })
    }
    


}


    
 




