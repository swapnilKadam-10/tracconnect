const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, "Date is required"],
    validate: {
      validator: function (value) {
        return /^\d{4}-\d{2}-\d{2}$/.test(value); // Ensures YYYY-MM-DD format
      },
      message: "Invalid date format. Use YYYY-MM-DD",
    },
  },
  workType: {
    type: String,
    required: [true, "Work type is required"],
    trim: true,
  },
  farmArea: {
    type: String,
    validate: {
      validator: function (value) {
        return !isNaN(value) || value === ""; // Ensures it's a number or empty
      },
      message: "Farm area must be a valid number",
    },
  },
  workRate: {
    type: String,
    validate: {
      validator: function (value) {
        return !isNaN(value) && Number(value) > 0; // Should be a positive number
      },
      message: "Work rate must be a positive number",
    },
  },
  totalAmount: {
    type: Number,
    required: [true, "Total amount is required"],
    min: [1, "Total amount must be greater than zero"],
  },
  advancePayment: {
    type: String,
    validate: {
      validator: function (value) {
        return !isNaN(value) && Number(value) >= 0; // Ensures positive numbers only
      },
      message: "Advance payment must be a positive number",
    },
  },
  finalPayableAmount: {
    type: Number,
    required: [true, "Final payable amount is required"],
    min: [0, "Final payable amount cannot be negative"],
  },
  note: {
    type: String,
    trim: true,
  },
  associatedClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: [true, "Associated client is required"],
  },
  
});




const WorkModel = mongoose.model('Work', WorkSchema);
module.exports = WorkModel;