const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: { 
    type: String ,
    required : true,
  },
  associatedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // workDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "Work" }],
});


const ClientModel = mongoose.model("Client", ClientSchema);
module.exports = ClientModel;