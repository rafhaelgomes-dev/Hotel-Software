const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const postReservaService = async (body) => {
  const { datacheckin, idhotel, datacheckout, status, nome, sobrenome, apartamento, hospedes } = body;

 const cadastrarReserva = await prisma.tb_reservas.create({
   data: {
      idhotel,
      datacheckin,
      datacheckout,
      apartamento,
      status
  }});

  hospedes.forEach(async (hospede) => {
      await prisma.tb_hospedes.create({
        data: {
          idReserva: cadastrarReserva.numeroreserva,
          nome: hospede.nome,
          sobrenome: hospede.sobrenome
        }
    });
  });

  return cadastrarReserva;
};

module.exports = {
  postReservaService,
}