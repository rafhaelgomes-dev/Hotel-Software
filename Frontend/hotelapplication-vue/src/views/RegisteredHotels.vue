<template>
  <div class="containerRegisteredHotel">
    <section class="containerTable">
    <h1>Hoteis Cadastrados</h1>
    <label>
      <p>Pesquise por um hotel:</p>
      <input type="text" @keyup="filterHotel" v-model="filter" placeholder="Digite um nome"/>
    </label>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>CNPJ</th>
          <th>Pais</th>
          <th>Estado</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hoteis" :key="hotel.id">
          <td>{{hotel.id}}</td>
          <td>{{hotel.nome}}</td>
          <td>{{hotel.cnpj}}</td>
          <td>{{hotel.pais}}</td>
          <td>{{hotel.estado}}</td>
          <td>{{hotel.cidade}}</td>
          <td><button type="button" class="editButton" @click="handleSelectEdit(hotel)">Editar</button></td>
        </tr>
        </tbody>
    </table>
    </section>
    <section v-show="edit" class="containerForm">
      <form>
        <label for="nome">
          <p>Id:</p>
          <input type="text" placeholder="Id" v-model="id" disabled/>
        </label>
        <label for="nome">
          <p>Nome:</p>
          <input type="text" placeholder="Nome" v-model="nome"/>
        </label>
        <label for="cnpj">
          <p>CNPJ:</p>
          <input type="text" placeholder="Cnpj" v-model="cnpj"/>
        </label>
        <label for="pais">
          <p>Pais:</p>
          <input type="text" placeholder="Pais" v-model="pais"/>
        </label>
        <label for="estado">
          <p>Estado:</p>
          <input type="text" placeholder="Estado" v-model="estado"/>
        </label>
        <label for="cidade">
          <p>Cidade:</p>
          <input type="text" placeholder="Cidade" v-model="cidade"/>
        </label>
        <br /><br />
        <div>
          <button type="button" class="buttonFinishEdit" @click="handleFinishEdit">Editar</button>
          <button type="button" class="buttonFinishEdit" @click="handleCancelarEdit">Cancelar</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
  import { getApi, putApi } from '../services/api';

  export default {
    name: "RegisteredHotels",
    data() {
      return {
        hoteis: [],
        hoteisForFilter: [],
        filter: '',
        edit: false,
        id: '',
        nome: '',
        cnpj: '',
        pais: '',
        estado: '',
        cidade: '',
      }
    },
    created() {
        this.getApi();
    },
    methods: {

      async getApi() {
      const req = await getApi("buscarHotel")
      const reqSorte = req.sort(function(a,b) {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
          });
      this.hoteis = [...reqSorte];
      this.hoteisForFilter = [...reqSorte];
      },

      handleSelectEdit(hotel) {
        this.edit = true;
        this.id = hotel.id;
        this.nome = hotel.nome;
        this.cnpj = hotel.cnpj;
        this.pais = hotel.pais;
        this.estado = hotel.estado;
        this.cidade = hotel.cidade;
      },

      filterHotel() {
        const filterHosts = this.hoteisForFilter.filter((e) => e.nome.includes(this.filter))
        const filterHostsSorte = filterHosts.sort(function(a,b) {
            return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
          });
        this.hoteis = filterHostsSorte;
      },

      async handleFinishEdit() {

        const attHotel = {
          id: this.id,
          nome: this.nome,
          cnpj: this.cnpj,
          pais: this.pais,
          estado: this.estado,
          cidade: this.cidade
        };

        await putApi("atualizarHotel", attHotel);
        this.getApi();
        this.edit = false;
      },

      handleCancelarEdit() {
        this.edit = false;
      }
    }
  }
</script>


<style scoped>
 .containerRegisteredHotel {
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100vh;
 }

 .containerTable {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 50px;
   width: 100%;
   text-align: center;
   position: relative;
   padding: 20px;
 }

 .containerForm {
   display: flex;
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.724);
   flex-direction: column;
   position: absolute;
   justify-content: center;
   align-items: center;
   z-index: 1;
 }

 form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
}

label {
  margin-top: 20px;
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
  width: 200px;
  margin: 5px;
}

.editButton {
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  height: 25px;
  width: 60px;
  border-radius: 5px;
}

 h1 {
   margin-bottom: 30px;
 }

 table {
   width: 80%;
   margin-top: 30px;
 }

 tr {
   height: 30px;
   text-align: center;
 }

  th {
    height: 40px;
  }
</style>

