const Hotel = require('./../models/hotelModel');


// Get all hotels
exports.getAllHotels = async (req, res) =>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json({
            results: hotels.length,
            data: {
                hotels
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'Failed',
            message: err
        })
    }
}
//Get Hotel
exports.getHotel = async (req, res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                hotel
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'Failed',
            message: err
        })
    }
}

//Create Hotel
exports.createHotel = async (req,res)=>{
    try{
        const newHotel = await Hotel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newHotel
        })
    }catch(err){
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

//Update Hotel
exports.updateHotel = async (req, res)=>{
    try{
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: "Success",
            data: {
                hotel
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

// Delete Hotel STATUS 200 NETINKA REIK PASITIKSLINTI
exports.deleteHotel = async (req, res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        })
    }catch(err){
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}