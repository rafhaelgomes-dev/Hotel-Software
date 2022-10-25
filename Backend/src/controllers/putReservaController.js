const { putReservaService } = require('../services/putReservaService');

const putReservaController = async (request, response) => {
  const body = request.body;
  const params = request.params;
  const AtualizarReserva = await putReservaService(body, params)
  return response.status(201).json(AtualizarReserva);
};

module.exports = {
  putReservaController,
}