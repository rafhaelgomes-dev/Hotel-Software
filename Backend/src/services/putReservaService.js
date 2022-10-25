const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const putReservaService = async (body, params) => {
  const { id } = params;
  const { datacheckin, idhotel, datacheckout, status, nome, sobrenome, apartamento, hospedes } = body;

 const atualizarReserva = await prisma.tb_reservas.update({
   where: {
     numeroreserva: Number(id)
   }, 
   data: {
    idhotel,
    datacheckin,
    datacheckout,
    apartamento,
    status
  }
 });

  hospedes.forEach(async (hospede) => {
    await prisma.tb_hospedes.update({
      where: {
        idhospede: hospede.idhospede
      }, 
      data: {
       nome: hospede.nome,
       sobrenome: hospede.sobrenome
    }
    });
  });

  return atualizarReserva;
};

module.exports = {
  putReservaService,
}