var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AudioSchema = new Schema({
	reciter:{type: String},
    data:[Schema.Types.Mixed]
});

module.exports = mongoose.model("Audio", AudioSchema);