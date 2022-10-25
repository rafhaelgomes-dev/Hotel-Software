const { postHotelService } = require('../services/postHotelService');

const postHotelController = async (req, res) => {
  const body = req.body;
  const cadastrar = await postHotelService(body);
  return res.status(201).json(cadastrar);
}

module.exports = {
  postHotelController
}