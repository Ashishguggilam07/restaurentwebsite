const restaurantModel=require("../model/restaurents.model");

exports.create=(req,res)=>{
    const {name,avgRating,cloudinaryImageId, cuisines, costForTwo} = req.body;

    const newRestaurant=new restaurantModel({

        name,avgRating,
        cloudinaryImageId,
        cuisines,
        costForTwo,
    });

    newRestaurant.save().then((data)=>{
        if(!data){
            res.status(400).send("something went wrong")
        }
        res.send(data);
    }).catch((err)=>res.status(500).json({message:"server not available"}));
}