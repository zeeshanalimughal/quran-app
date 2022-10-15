const Audio = require("../models/AudioModel");
const apiResponse = require("../helpers/apiResponse");




/**
 * Audios List By Reciters.
 * 
 * @returns {Object}
 */
 exports.getAudiosByReciters = [
	// auth,
	function (req, res) {
		const {reciter} = req.params
        console.log(reciter);
		if(!reciter){
			return apiResponse.successResponseWithData(res, "Reciter Name is required",[]);
		}
		try {
			Audio.find({"reciter":reciter}).then((audios)=>{
				if(audios.length){
					return apiResponse.successResponseWithData(res, "Operation success", audios);
				}else{
					return apiResponse.successResponseWithData(res, "Operation failed", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];


