const Surah = require("../models/SurahsModel");
const apiResponse = require("../helpers/apiResponse");





/**
 * Ayah Single With Surah
 * 
 * @returns {Object}
 */
 exports.ayahSingleWithSurah = [
	// auth,
	function (req, res) {

        const {surahNumber,ayahNumber} = req.params
		if(!surahNumber  || !ayahNumber || isNaN(surahNumber) || isNaN(ayahNumber)){
			return apiResponse.successResponseWithData(res, "Surah And Ayah Number is required",[]);
		}
		try {
			Surah.find({'number':+surahNumber}).select({
				"number":1,
				"name":1,
				"ayahs.number":1,
				"ayahs.numberInSurah":1,
				"ayahs.text":1,
				"ayahs.audio":1,
				"ayahs.juz":1,
				"ayahs.manzil":1,
				"ayahs.sajda":1,
			}).then((surah)=>{
                const ayah = surah[0].ayahs.filter(ayah => ayah.numberInSurah===+ayahNumber)
				if(ayah.length > 0){
                    surah[0].ayahs = ayah
					return apiResponse.successResponseWithData(res, "Operation success", surah);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	}
];
