const Surah = require("../models/SurahsModel");
const apiResponse = require("../helpers/apiResponse");




/**
 * Surahs List.
 * 
 * @returns {Object}
 */
 exports.surahList = [
	// auth,
	function (req, res) {
		try {
			Surah.find({}).limit(1).then((surahs)=>{
				if(surahs.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", surahs);
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
