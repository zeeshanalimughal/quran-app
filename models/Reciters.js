var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RecitersSchema = new Schema({
        "reciter": {
          "type": "String"
        },
        "language": {
          "type": "String"
        },
        "name": {
          "type": "String"
        },
        "profileImage": {
          "type": "String",
        },
        "englishName": {
          "type": "String"
        },
        "format": {
          "type": "String"
        },
        "type": {
          "type": "String", ref:"Type"
        },
        "direction": {
          "type": "String"
        }
      
}
);

module.exports = mongoose.model("Reciters", RecitersSchema);