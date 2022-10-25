-- CreateTable
CREATE TABLE "tb_hotel" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,

    CONSTRAINT "tb_hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_reservas" (
    "numeroreserva" SERIAL NOT NULL,
    "idhotel" INTEGER NOT NULL,
    "apartamento" INTEGER NOT NULL,
    "datacheckin" TEXT NOT NULL,
    "datacheckout" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "tb_reservas_pkey" PRIMARY KEY ("numeroreserva")
);

-- CreateTable
CREATE TABLE "tb_hospedes" (
    "idhospede" SERIAL NOT NULL,
    "idReserva" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,

    CONSTRAINT "tb_hospedes_pkey" PRIMARY KEY ("idhospede")
);

-- AddForeignKey
ALTER TABLE "tb_reservas" ADD CONSTRAINT "tb_reservas_idhotel_fkey" FOREIGN KEY ("idhotel") REFERENCES "tb_hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_hospedes" ADD CONSTRAINT "tb_hospedes_idReserva_fkey" FOREIGN KEY ("idReserva") REFERENCES "tb_reservas"("numeroreserva") ON DELETE RESTRICT ON UPDATE CASCADE;
