<template>
  <div class="containerReservation">
    <section class="containerTable">
      <h1>Reservas e Hospedes</h1>
      <table>
        <thead>
          <tr>
            <th>Reserva</th>
            <th>Hotel</th>
            <th>Apartamento</th>
            <th>Data de CheckIn</th>
            <th>Data de CheckOut</th>
            <th>Hospedes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Reserva in Reservas" :key="Reserva.numeroreserva">
            <td>{{Reserva.numeroreserva}}</td>
              <td>{{Reserva.hotel.nome}} <button type="button" @click="handleHotelDetails(Reserva.hotel)" class="buttonDetailsHotel">Detalhes do Hotel</button></td>
            <td>{{Reserva.apartamento}}</td>
            <td>{{Reserva.datacheckin}}</td>
            <td>{{Reserva.datacheckout}}</td>
            <td><button type="button" @click="handleHostsDetails(Reserva.hospedes)" class="buttonDetailsHosts">Ver Hospedes</button></td>
            <td><button type="button" @click="handleEdit(Reserva)" class="buttonEdit">Editar</button></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section v-show="ShowDetailsHotel" class="containerDetails">
      <HotelDetails :hotel="hotel"/>
      <button v-show="CloseDetails" type="button" 
      @click="handleCloseHotelDetails" class="buttonCloseHotelDetails">Fechar</button>
    </section>
    <section v-show="ShowDetailsHosts" class="containerDetails">
      <HostsDetails :hospedes="hospedes"/>
      <button type="button" 
      @click="handleCloseHostDetails" class="buttonCloseHotelDetails">Fechar</button>
    </section>
    <section v-show="editReservationsShow" class="editReservations">
      <form>
        <label class="label">
          <p>Id hotel</p>
          <input type="number" v-model="editReserva.idhotel" disabled/>
        </label>
        <label>
          <p>Apartamento</p>
          <input type="number" v-model="editReserva.apartamento"/>
        </label>
        <label>
          <p>Data de check-in</p>
          <input type="datetime-local" v-model="editReserva.datacheckin"/>
        </label>
        <label>
          <p>Data de check-out</p>
          <input type="datetime-local" v-model="editReserva.datacheckout"/>
        </label>
        <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hospede, index) in editHospede" :key="index">
            <td>{{hospede.nome}}</td>
            <td>{{hospede.sobrenome}}</td>
            <td><button type="button" @click="handleEditHospede(hospede)">Editar</button></td>
          </tr>
        </tbody>
      </table>
        <div v-show="showEditHospede" class="showEditHospede">
        <label>
          <p>Id do hospede</p>
          <input type="text" v-model="hospede.idhospede" disabled/>
        </label>
        <label>
          <p>Nome</p>
          <input type="text" v-model="hospede.nome"/>
        </label>
        <label>
          <p>Sobrenome</p>
          <input type="text" v-model="hospede.sobrenome"/>
        </label>
          <br/>
          <button type="button" @click="finishEditHosts" class="buttonEditHospede">Concluir</button>
        </div>
        <button type="button" @click="handleFinishEditReservations" class="buttonFinishEdit">Finalizar Edição</button>
        <button type="button" @click="handleCancelEditReservations" class="buttonFinishEdit">Cancelar</button>
      </form>
    </section>
  </div>
</template>

<script>
 import HotelDetails from '../components/HotelDetails.vue';
 import HostsDetails from '../components/HostsDetails.vue';
 import { getApi, putApiEditReserva } from '../services/api';

 export default {
   name: "Reservations",
   components : {
    HotelDetails,
    HostsDetails
   },
  
   data() {
     return {
       Reservas: [],
       ShowDetailsHotel: false,
       CloseDetails: false,
       ShowDetailsHosts: false,
       hotel: {},
       hospedes: [],
       editReserva: {},
       editHospede: [],
       hospede: {},
       showEditHospede: false,
       editReservationsShow: false,
     }
   },
  
   methods: {
    async getApiReservas() {
      const req = await getApi("buscarReservaHospede");
      const reqSorte = req.sort(function(a,b) {
            return a.numeroreserva < b.numeroreserva ? -1 : a.numeroreserva > b.numeroreserva ? 1 : 0;
          });
      this.Reservas = reqSorte;
    },

    handleHotelDetails(hotel) {
      this.hotel = hotel;
      this.ShowDetailsHotel = true;
      this.CloseDetails = true;
    },

    handleHostsDetails(hospedes) {
      this.hospedes = hospedes;
      this.ShowDetailsHosts = true;
    },

    handleCloseHotelDetails() {
      this.ShowDetailsHotel = false;
    },

    handleCloseHostDetails() {
      this.ShowDetailsHosts = false;
    },

    handleEdit(Reserva) {
      this.editReserva = {
        numeroreserva: Reserva.numeroreserva,
        idhotel: Reserva.idhotel,
        datacheckin: Reserva.datacheckin,
        datacheckout: Reserva.datacheckout,
        apartamento: Reserva.apartamento,
        status: Reserva.status,
      }
      this.editHospede = Reserva.hospedes;
      this.editReservationsShow = true;
    },

     async handleFinishEditReservations() {
      const objFinishEdit = {
        idhotel: this.editReserva.idhotel,
        datacheckin: this.editReserva.datacheckin,
        datacheckout: this.editReserva.datacheckout,
        apartamento: this.editReserva.apartamento,
        status: this.editReserva.status,
        hospedes: [...this.editHospede]
      }
      await putApiEditReserva(this.editReserva.numeroreserva, objFinishEdit);
      this.editReservationsShow = false;
      this.getApiReservas();
    },

    handleEditHospede(hospede) {
      this.hospede = hospede
      this.showEditHospede = true;
    },

    finishEditHosts() {
      this.showEditHospede = false;
    },

    handleCancelEditReservations() {
      this.editReservationsShow = false;
    }
  
   },
  
   created() {
     this.getApiReservas()
   }
 }
</script>

<style scoped>
.containerReservation {
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100vh;
 }

 .containerTable {
   margin-top: 50px;
   text-align: center;
   position: relative;
   width: 80%;
 }

 .showEditHospede {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }

 .containerDetails {
   display: flex;
   width: 100%;
   height: 100vh;
   background-color: white;
   flex-direction: column;
   position: absolute;
   align-items: center;
   z-index: 1;
 }

 p {
  margin-top: 20px;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


 input {
  background-color: white;
  padding: 6px;
  border: none;
  border-bottom: 1px solid black;
  height: 40px;
  width: 500px;
}
 
  .buttonFinishEdit {
    background-color: black;
    border: none;
    cursor: pointer;
    color: white;
    height: 40px;
    width: 300px;
    margin-top: 10px;
  }
  .buttonEditHospede {
    background-color: black;
    border: none;
    cursor: pointer;
    color: white;
    height: 40px;
    width: 100px;
  }

 .editReservations {
   display: flex;
   width: 100%;
   height: 100vh;
   background-color: white;
   flex-direction: column;
   margin-top: 50px;
   position: absolute;
   align-items: center;
   z-index: 1;
 }

 .buttonCloseHotelDetails {
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  height: 40px;
  width: 300px;
  margin-top: 20px;
}

.buttonDetailsHotel {
  display: block;
  background-color: rgb(47, 47, 47);
  border: none;
  cursor: pointer;
  color: white;
  height: 25px;
  width: 120px;
  border-radius: 5px;
  margin: auto;
  margin-top: 5px;
}

.buttonDetailsHosts {
  display: block;
  background-color: rgb(47, 47, 47);
  border: none;
  cursor: pointer;
  color: white;
  height: 25px;
  width: 120px;
  border-radius: 5px;
  margin: auto;
}

.buttonEdit {
  background-color: rgb(24, 0, 95);
  border: none;
  cursor: pointer;
  color: white;
  height: 25px;
  width: 80px;
  border-radius: 5px;
}

table {
   width: 100%;
   text-align: center;
 }

 tr {
   height: 30px;
   text-align: center;
 }

 td {
   text-align: center;
 }

  th {
    height: 40px;
    text-align: center;
  }

  tbody {
    text-align: center;
  }


</style>
