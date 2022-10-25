<template>
  <div>
    <h1>Cadastrar reserva e hospedes</h1>
    <form>
      <label for="id">
      <p>Id do hotel:</p>
      <input type="text" placeholder="Id do hotel" v-model="idHotel"/>
    </label>
    <label for="dataCheckIn">
      <p>Data de check-in:</p>
      <input type="datetime-local" placeholder="Data de checkin" v-model="dataCheckIn"/>
    </label>
    <label for="dataCheckIn">
      <p>Data de check-out:</p>
      <input type="datetime-local" placeholder="Data de checkout" v-model="dataCheckout"/>
    </label>
    <label for="apartamento">
      <p>Apartamento:</p>
      <input type="text" placeholder="Apartamento" v-model="apartamento"/>
    </label>
    <br/><br/>
      <li v-if="hospedes.length === 0">Adicione pelo menos um hospede</li>
      <ul v-for="(hospede, index) in hospedes" :key="index">
        <li>{{hospede.nome}} {{hospede.sobrenome}}</li>
      </ul>
      <label for="Nome">
      <p>Nome:</p>
      <input type="text" placeholder="Nome" v-model="Nome"/>
    </label>
    <label for="sobrenome">
      <p>Sobrenome:</p>
      <input type="text" placeholder="Sobrenome" v-model="Sobrenome"/>
    </label>
    <br/><br/>
    <button type="button" @click="handleAddHospedes">Adicionar hospede</button>
    <br/><br/>
    <button type="button" @click="handlefinish">Finalizar Cadastro</button>
    </form>
  </div>
</template>

<script>
  import { postApi } from '../services/api';  

  export default {
    name: "BookingRegistration",
  data() {
    return {
      hospedes: [],
      Nome: '',
      Sobrenome: '',
      idHotel: '',
      dataCheckIn: '',
      dataCheckout: '',
      apartamento: '',
    }
  },
  methods: {

    handleAddHospedes() {

      if(this.Nome.length === 0 || this.Sobrenome.length === 0) {
        return global.alert("Preencha todos os campos");
      };

      const hospede = {
        nome: this.Nome,
        sobrenome: this.Sobrenome
      };

      this.hospedes = [...this.hospedes, hospede];
    },

   async handlefinish() {
      if (this.hospedes.length === 0) {
        return global.alert("Adicione pelo menos um hospede para continuar")
      };

      if(this.idHotel.length === 0 || this.dataCheckIn.length === 0 || this.dataCheckout.length === 0 || this.apartamento.length === 0) {
        return global.alert("preencha todos os campos para finalizar")
      };
  
      const Reserva = {
        "idhotel": Number(this.idHotel),
        "datacheckin": this.dataCheckIn,
        "datacheckout": this.dataCheckout,
        "apartamento": Number(this.apartamento),
        "status": true,
        "hospedes": JSON.parse(JSON.stringify(this.hospedes))
      };
  
        await postApi("cadastrarReservaHospede", Reserva);

        this.hospedes = [];
        this.Nome = '';
        this.Sobrenome = '';
        this.idHotel = '';
        this.apartamento = '';

    }
  }
  }

</script>

<style scoped>
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

label {
  margin-top: 30px;
}

input {
  background-color: white;
  border: none;
  border-bottom: 1px solid black;
  height: 40px;
  width: 700px;
}

button {
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  height: 40px;
  width: 300px;
}
</style>
