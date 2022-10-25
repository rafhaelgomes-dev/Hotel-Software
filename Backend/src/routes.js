const express = require("express");
const { postHotelController } = require("./controllers/postHotelController");
const { putHotelController } = require("./controllers/putHotelController");
const { getHotelController } = require("./controllers/getHotelController");
const { postReservaController } = require("./controllers/postReservaController");
const { putReservaController } = require("./controllers/putReservaController");
const { getReservaController } = require("./controllers/getReservaController");


const hotelRoutes = express.Router();

// Hotel

hotelRoutes.post("/cadastrarHotel", postHotelController);

hotelRoutes.get("/buscarHotel", getHotelController);

hotelRoutes.put("/atualizarHotel", putHotelController);

// Reservas e Hospedes

hotelRoutes.post("/cadastrarReservaHospede", postReservaController)

hotelRoutes.put("/atualizarReservaHospede/:id", putReservaController)

hotelRoutes.get("/buscarReservaHospede", getReservaController)

module.exports = hotelRoutes