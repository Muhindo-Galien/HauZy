const Property = require('../models/Property');
const {
  CREATED,OK, UNAUTHORIZED
} = require('../constants/statusCodes');

const logger = require('../util/logger');

// create property

exports.propertyCreate = async(req,res) => {
  const {
    status,
    price,
    state,
    city,
    address,
    type,
    image_url,
  } = req.body

  const nweProperty = new Property({
    owner: req.user.id,
    status,
    price,
    state,
    city,
    address,
    type,
    image_url, });
  console.log(req.user)
  try{
    const saveProperty = await nweProperty.save();
    res.status(CREATED).json({
      status: 'success',
      data: saveProperty });
  }catch(error){
    logger.error(error.message);
  }

}
//updated property

exports.propertyUpdate = async(req, res) => {
  try{
    if(req.params.propertyid === req.body.propertyId){

      const updatedProperty = await Property.findOneAndUpdate(
        req.params.propertyid,
        { $set: req.body },
        { new: true });
      res.status(OK).json({
        status: 'success',
        data: updatedProperty
      });
    }
    else{
      res.status(UNAUTHORIZED).json({
        status: 'error',
        message: 'You can only update your property'
      })
    }

  }catch(err){
    logger.error(err.message);
  }


}

// deleted property

exports.propertyDelete = async(req, res) => {
  try{
    await Property.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    res.status(OK).json({
      status: 'success',
      message: 'Property successfully deleted!'
    });
  }catch(err){
    logger.error(err.message);
  }

}

// get all properties & a signle property by type
exports.propertyGetAll = async(req, res) => {
  const type = req.query.type;
  try{
    let property;
    if(type){
      property =  await Property.find({ type });
    }else{
      property =  await Property.find();
    }
    res.status(OK).json({
      status: 'success',
      data: property
    });
  }catch(err){
    logger.error(err.message);
  }

}

// get get one property

exports.propertyGetOne = async(req, res) => {
  try{
    const signleProperty = await Property.findById(req.params.propertyId);
    res.status(OK).json({
      status: 'success',
      data: signleProperty
    });
  }catch(err){
    logger.error(err.message);
  }
}


// get  property by type
// exports.propertyGetByType = async(req, res) => {


//   try{
//     const signlePropertyById = await Property.find({ city: req.query.cit });
//     console.log(signlePropertyById)
//     res.status(OK).json({
//       status: 'success',
//       data: signlePropertyById
//     });
//     console.log(signlePropertyById)

//   }catch(err){
//     logger.error(err.message);
//   }

// }


// exports.propertyUpdate = async(req,res) => {

//   res.send(' update')
// }
// DELETE /property/:property-id
// Delete a property

// Response spec:

// {
//   "status" : 'success',
//   "data" : {
//     "message" : "Message goes here"
//   }
// }]

// exports.propertyDelete = async(req,res) => {
//   const property = await Property.findById(req.params.id);

//   if(property._id === req.params.id){
//     console.log(req.params.id);

//     try{res.status(OK).json({
//       status : 'success',
//       data : {
//         message : 'Property successfully deleted'
//       }
//     })
//     }catch(err){
//       logger.error(err.message);
//     }
//   }else{
//     res.status(UNAUTHORIZED).json({
//       status:'error',
//       message: 'You can only delete your own property'
//     })
//   }

// }


