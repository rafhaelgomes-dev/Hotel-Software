<template>
  <div>
    <h1>Hotel Software</h1>
    <nav>
    <router-link to="/" class="link">Cadastrar Hotel</router-link>
    <router-link to="/registeredhotels" class="link">Hoteis Cadastrados</router-link>
    <router-link to="/bookingregistration" class="link">Cadastrar Reserva e Hospedes</router-link>
    <router-link to="/reservations" class="link">Reservas e Hospedes</router-link>
  </nav>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

  h1 {
    color: black;
    margin: 5px;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 15px;
    border-bottom: 1px solid black;
  }

  nav {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 900px;
  }
  .link {
    text-decoration: none;
    margin: 5px;
    color: black;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
</style>
