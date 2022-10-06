var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SurahsSchema = new Schema({
    "_id": {
        "$oid": {
            "type": "ObjectId"
        }
    },
    "number": {
        "type": "Number"
    },
    "name": {
        "type": "String"
    },
    "englishName": {
        "type": "String"
    },
    "englishNameTranslation": {
        "type": "String"
    },
    "revelationType": {
        "type": "String"
    },
    "ayahs": {
        "type": [
            "Mixed"
        ]
    }
}
);

module.exports = mongoose.model("Surahs", SurahsSchema);