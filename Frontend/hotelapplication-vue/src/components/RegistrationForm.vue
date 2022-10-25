<template>
  <form>
    <label for="nome">
      <p>Nome:</p>
      <input type="text" v-model="nome" @keyup="validation"/>
    </label>
    <label for="cnpj">
      <p>CNPJ:</p>
      <input type="text" v-model="cnpj" @keyup="validation"/>
    </label>
    <label for="pais">
      <p>Pais:</p>
      <input type="text" v-model="pais" @keyup="validation"/>
    </label>
    <label for="estado">
      <p>Estado:</p>
      <input type="text" v-model="estado" @keyup="validation"/>
    </label>
    <label for="cidade">
      <p>Cidade:</p>
      <input type="text" v-model="cidade" @keyup="validation"/>
    </label>
    <br /><br />
    <button type="button" @click="handleRegisterHotel">Cadastrar Hotel</button>
  </form>
</template>

<script>
import { postApiCadastrarHotel } from '../services/api';

  export default {
    name: "RegistrationForm",
    data() {
      return {
        nome: '',
        cnpj: '',
        pais: '',
        estado: '',
        cidade: '',
      }
    },
    methods: {
      async handleRegisterHotel() {

        if (this.nome.length === 0 || this.cnpj.length === 0 || this.pais.length === 0 || this.estado.length === 0 || this.cidade.length === 0) {
          return global.alert("Preencha todos os campos")
        } 
  
        const hotel = {
          nome: this.nome,
          cnpj: this.cnpj,
          pais: this.pais,
          estado: this.estado,
          cidade: this.cidade
        }
         await postApiCadastrarHotel("cadastrarHotel", hotel);  

         this.nome = '';
         this.cnpj = '';
         this.pais = '';
         this.estado = '';
         this.cidade = '';
      },
    }
  }

</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
