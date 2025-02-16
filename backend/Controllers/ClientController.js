const ClientModel = require("../Models/Client");
const Client = require("../Models/Client");

// TODO: Get All clients information
const clientsInfo = async (req, res) => {
  try {
    const clients = await Client.find({ associatedUser: req.user.id });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clients", error });
  }
};
// TODO: add new client 

const addClient = async (req, res) => {
  try {
    const { name, phoneNo } = req.body;

    // Debug logs
    console.log("Request Body:", req.body);
    console.log("User ID from Middleware:", req.user?.id);

    // Check for missing user ID
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        message: "Unauthorized: User not authenticated",
        success: false,
      });
    }

    // Optional: Check for duplicate clients
    const existingClient = await ClientModel.findOne({
      phoneNo,
      associatedUser: req.user.id,
    });

    if (existingClient) {
      return res.status(409).json({
        message: "Client already exists",
        success: false,
      });
    }

    // Create new client
    const clientModel = new Client({
      name,
      phoneNo,
      associatedUser: req.user.id,
    });

    await clientModel.save();

    return res.status(201).json({
      message: "Client added successfully",
      success: true,
    });
  } catch (err) {
    console.error("Error adding client:", err);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
//TODO: Remove a client by phone number, associated with the logged-in user
const deleteClient =  async (req, res) => {
  const { phoneNo } = req.body; // Extract phoneNo from the request body
  const userId = req.user.id; // Extract user ID from authenticated user

  if (!phoneNo) {
    return res.status(400).json({
      message: "Phone number is required to delete a client",
      success: false,
    });
  }

  try {
    // Search for and delete the client by phone number and associated user ID
    const deletedClient = await Client.findOneAndDelete({
      phoneNo,
      associatedUser: userId, // Ensure the client is associated with the logged-in user
    });

    if (!deletedClient) {
      return res.status(404).json({
        message: "Client with the provided phone number not found for this user",
        success: false,
      });
    }

    res.status(200).json({
      message: "Client successfully deleted",
      client: deletedClient,
      success: true,
    });
  } catch (error) {
    console.error("Error deleting client:", error.message);
    res.status(500).json({
      message: "An error occurred while deleting the client",
      success: false,
    });
  }
}

//TODO: Get imfomation about perticular client.

const client = async (req, res) => {
  const { phoneNo } = req.body;
  try {
    const client = await Client.findOne({ phoneNo : phoneNo, associatedUser: req.user.id })
    res.status(200).json(client);
  } catch (err) {
    return res.status(404).json({ message :"" ,err });
  }
  
}

module.exports = {
  clientsInfo,
  addClient,
  deleteClient,
};