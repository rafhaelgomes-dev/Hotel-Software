const { postReservaService } = require('../services/postReservaService');

const postReservaController = async (request, response) => {
  const body = request.body;
  const cadastrarReserva = await postReservaService(body)
  return response.status(201).json(cadastrarReserva);
};

module.exports = {
  postReservaController,
}