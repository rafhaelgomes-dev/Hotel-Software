<template>
  <div>
    <h1>Hospedes</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(Hospede, index) in hospedes" :key="index">
          <td>{{Hospede.nome}}</td>
          <td>{{Hospede.sobrenome}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: "HostsDetails",
    props: {
      hospedes: Array
    }
  }
</script>

<style scoped>
  div {
    margin-top: 50px;
    text-align: center;
  }

  h1 {
    margin-bottom: 20px;
  }

  table {
   width: 400px;
 }

 tr {
   height: 30px;
   text-align: center;
 }

  th {
    height: 40px;
  }

</style>
