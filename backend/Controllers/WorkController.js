const WorkModel = require("../Models/WorkDetails")


// const displayWork = async (req, res) => {
//   const WorkDetails = await WorkModel.find({associatedClient: req.body.id})
// }

const displayWork = async (req, res) => {
  try {
    const WorkDetails = await WorkModel.find({ associatedClient: req.query.id });

    if (!WorkDetails.length) {
      return res.status(404).json({
        message: "No work records found for this client",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Work records retrieved successfully",
      success: true,
      data: WorkDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};


const addWork = async (req, res) => {
  try {
    const { date, workType, farmArea, workRate, totalAmount, advancePayment, finalPayableAmount } = req.body;

     // Remove extra quotes from associatedClient
     const associatedClient = req.body.associatedClient.replace(/^"|"$/g, '');

    const workModel = new WorkModel({ date, workType, farmArea, workRate, totalAmount, advancePayment, finalPayableAmount, associatedClient });
    
    await workModel.save();
    return res.status(201).json({
      message: "Record added successfully!",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server Error",
      success: false,
      error: err.message,
    });
  }
}

const removeWork = async (req, res) => {
  try {
    const { userId, workType, date } = req.body;

    // Ensure all fields are provided
    if (!userId || !workType || !date) {
        return res.status(400).json({ error: "userId, workType, and date are required" });
    }

    // Delete work record
    const deletedWork = await Work.findOneAndDelete({ 
        userId, 
        workType, 
        date: new Date(date)  // Ensure correct date format
    });

    if (!deletedWork) {
        return res.status(404).json({ message: "No matching work record found" });
    }

    res.json({ message: "Work deleted successfully", deletedWork });
} catch (error) {
    res.status(500).json({ error: "Error deleting work" });
}
}

module.exports = {
  addWork,
  displayWork,
  removeWork
};