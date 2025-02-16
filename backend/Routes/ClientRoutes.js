const { clientsInfo, addClient, deleteClient } = require('../Controllers/ClientController');
const authenticate = require('../Middlewares/ClientValidation');

const router = require('express').Router();

router.get('/clients',authenticate ,clientsInfo)
router.post('/clients',authenticate,addClient)
router.delete("/clients", authenticate, deleteClient);

module.exports = router;