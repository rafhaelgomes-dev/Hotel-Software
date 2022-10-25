const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const postHotelService = async (body) => {
  const { nome, cnpj, pais, estado, cidade } = body
    const cadastrar = await prisma.tb_hotel.create({
     data: {
        nome,
        cnpj,
        pais,
        estado,
        cidade
    }});

    const newObj = {
      id: cadastrar.id
    }
    return newObj;
};

module.exports = {
  postHotelService,
};