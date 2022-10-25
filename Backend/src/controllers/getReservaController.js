const { getReservaService } = require('../services/getReservaService');

const getReservaController = async (request, response) => {
  const hospedes = await getReservaService()
  return response.status(200).json(hospedes);
};

module.exports = {
  getReservaController,
}