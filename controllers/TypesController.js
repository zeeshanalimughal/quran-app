const Type = require("../models/Type");
const apiResponse = require("../helpers/apiResponse");




/**
 * Types List.
 * 
 * @returns {Object}
 */
 exports.typesList = [
	// auth,
	function (req, res) {
		try {
			Type.find({}).then((types)=>{
				if(types.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", types);
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
