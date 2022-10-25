require('express-async-errors');
const express = require('express');
const globalError = require('./middlewares/globalError');
const hotelRoutes = require("./routes");
const cors = require("cors");

// ...

const app = express();
app.use(cors());
app.use(express.json());
app.use(hotelRoutes);
app.use(globalError.handle);

// ...

// É importante exportar a constante app,
// para que possa ser utilizada pelo arquivo src/server.js
module.exports = app;