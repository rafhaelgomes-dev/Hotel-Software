const { putHotelService } = require('../services/putHotelService');

const putHotelController = async (req, res) => {
  const body = req.body;
  const updateHotel = await putHotelService(body);
  return res.status(200).json(updateHotel);
}

module.exports = {
  putHotelController,
}