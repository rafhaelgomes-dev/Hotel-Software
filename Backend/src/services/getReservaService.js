const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const getReservaService = async () => {
  const hospedes = await prisma.tb_reservas.findMany({
    include: {
      hospedes: true,
      hotel: true
    }
  });

  return hospedes;
};

module.exports = {
  getReservaService,
}