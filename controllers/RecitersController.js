const Reciters = require("../models/Reciters");
const apiResponse = require("../helpers/apiResponse");




/**
 * Surahs List.
 * 
 * @returns {Object}
 */
 exports.recitersList = [
	// auth,
	function (req, res) {
		try {
        
			Reciters.find({'language':'ar'}).select({'englishName':0,'direction':0,'name':0}).then((reciters)=>{
				if(reciters.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", reciters);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];



/**
 * Reciters List.
 * 
 * @returns {Object}
 */
 exports.recitersListWithType = [
	// auth,
	function (req, res) {
        console.log(req.params.type)
		try {
			Reciters.find({type:req.params.type,language:'ar'}).select({'englishName':0,'direction':0,'name':0}).then((reciters)=>{
				if(reciters.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", reciters);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];
