const Surah = require("../models/SurahsModel");
const apiResponse = require("../helpers/apiResponse");




/**
 * Surahs List.
 * 
 * @returns [{Object}]
 */
 exports.surahList = [
	// auth,
	function (req, res) {
		try {
			Surah.find({}).select({
				"number":1,
				"name":1,
				"ayahs.number":1,
				"ayahs.text":1,
				"ayahs.audio":1,
				"ayahs.juz":1,
				"ayahs.manzil":1,
				"ayahs.sajda":1,
			}).then((surahs)=>{
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


/**
 * Surahs Single.
 * 
 * @returns {Object}
 */
 exports.surahSingle = [
	// auth,
	function (req, res) {
		const {surahNumber} = req.params
		if(!surahNumber || isNaN(surahNumber)){
			return apiResponse.successResponseWithData(res, "Surah Number is required",[]);
		}
		try {
			Surah.find({'number':surahNumber}).select({
				"number":1,
				"name":1,
				"ayahs.number":1,
				"ayahs.text":1,
				"ayahs.audio":1,
				"ayahs.juz":1,
				"ayahs.manzil":1,
				"ayahs.sajda":1,
			}).then((surah)=>{
				if(surah.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", surah);
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


