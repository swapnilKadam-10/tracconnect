const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ClientRouter = require('./Routes/ClientRoutes')
const WorkRouter = require('./Routes/WorkRouter');
const InvoiceRouter = require('./Routes/InvoiceRouter')

require('dotenv').config();
require('./Models/db');


const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/auth',AuthRouter);
app.use('/api',ClientRouter);
app.use('/work',WorkRouter )
app.use('/api',InvoiceRouter);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});