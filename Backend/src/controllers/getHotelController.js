const { getHotelService } = require('../services/getHotelService');

const getHotelController = async (request, response) => {
  const hoteis = await getHotelService()
  return response.status(200).json(hoteis);
};

module.exports = {
  getHotelController,
}