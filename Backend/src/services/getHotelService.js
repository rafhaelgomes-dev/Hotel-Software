const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const getHotelService = async () => {
  const hoteis = await prisma.tb_hotel.findMany();
  return hoteis;
};

module.exports = {
  getHotelService,
};