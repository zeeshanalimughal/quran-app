var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TypeSchema = new Schema({
    "type":"String"
}
);

module.exports = mongoose.model("Type", TypeSchema);