const WorkModel = require("../Models/WorkDetails")


const displayWork = async (req, res) => {
  const WorkDetails = await WorkModel.find({associatedClient: req.body.id})
}

const addWork = async (req, res) => {
  try {
    const { date, workType, farmArea, workRate, totalAmount, advancePayment, finalPayableAmount, note } = req.body;


    const workModel = new WorkModel({ date, workType, farmArea, workRate, totalAmount, advancePayment, finalPayableAmount, note });
    
    await workModel.save();
    return res.status(200).json({
      message: "Record added successfully!",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server Error",
      success: false,
    });
  }
}

module.exports = {
  addWork,
  displayWork,
};