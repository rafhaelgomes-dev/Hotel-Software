import axios from 'axios';

export const getApi = async (endpoint) => {
  const req = await axios.get(`http://localhost:3333/${endpoint}`)
  const { data } = req;
  return data;
};

export const putApi = async (endpoint, hotel) => {
   await axios.put(`http://localhost:3333/${endpoint}`, hotel)
  .then(function (response) {
    global.alert("Hotel editado com sucesso")
  })
  .catch(function (error) {
    global.alert("Error ao atualizar hotel", error);
  });
};

export const postApi = async (endpoint, Reserva) => {
  await axios.post(`http://localhost:3333/${endpoint}`, Reserva)
  .then(function (response) {
    global.alert("Reserva Cadastrada com sucesso");
  })
  .catch(function (error) {
    global.alert("Error ao cadastrar reserva", error);
  });
};

export const postApiCadastrarHotel = async (endpoint, Hotel) => {
  await axios.post(`http://localhost:3333/${endpoint}`, Hotel)
  .then(function (response) {
    global.alert("Hotel Cadastrado com sucesso");
  })
  .catch(function (error) {
    global.alert("Error ao cadastrar hotel", error);
  });
}

export const putApiEditReserva = async (idReserva, reserva) => {
  await axios.put(`http://localhost:3333/atualizarReservaHospede/${idReserva}`, reserva)
      .then(function (response) {
        global.alert("Reserva editado com sucesso")
      })
      .catch(function (error) {
        global.alert("Erro ao atualizar Reserva", error)
      });
}