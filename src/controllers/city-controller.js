const {CityService} = require('../services/index');


const cityService = new CityService();

/**
 * 
 *  POST 
 *   data -> req.body
 */

const create =  async function (req,res,next){

      try {
          const response = await cityService.createCity(req.body);
          return res.status(201).json({
              data : response,
              success : true,
              message : 'Successfully created a city',
              err: {}
          })
         
      }catch(error){
         console.log(error);
         return res.status(500).json({
             data : {},
             success : false,
             message : 'Not able to create a city',
             err : error
         })
      }
      
} 

/**
 * 
 *    // Delete -> /city/:id
 */


const destroy = async function (req,res,next){

    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err: {}
        })
       
    }catch(error){
       console.log(error);
       return res.status(500).json({
           data : {},
           success : false,
           message : 'Not able to delete a city',
           err : error
       })
    }
      
}

const get = async function (req,res,next){

    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fetched a city',
            err: {}
        })
       
    }catch(error){
       console.log(error);
       return res.status(500).json({
           data : {},
           success : false,
           message : 'Not able to get a city',
           err : error
       })
    }
      
}


/*
Patch -> /city/:id ->req.body
 */

const update = async function (req,res,next){

    try {
        const response = await cityService.updateCity(req.params.id , req.body);
        return res.status(201).json({
            data : response,
            success : true,
            message : 'Successfully updated a city',
            err: {}
        })
       
    }catch(error){
       console.log(error);
       return res.status(500).json({
           data : {},
           success : false,
           message : 'Not able to update a city',
           err : error
       })
    }
      
}

module.exports = {
    create,
    destroy,
    get,
    update
}