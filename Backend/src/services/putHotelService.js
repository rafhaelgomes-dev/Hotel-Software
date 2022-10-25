const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const putHotelService = async (body) => {
  const { nome, cnpj, pais, estado, cidade, id } = body
  const hoteis = await prisma.tb_hotel.update({where: {
    id,
  },
  data: {
    nome,
    cnpj,
    pais,
    estado,
    cidade
  }
  });

  return hoteis;
};

module.exports = {
  putHotelService,
}