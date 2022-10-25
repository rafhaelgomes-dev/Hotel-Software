<template>
  <div>
    <h1>Detalhes do Hotel</h1>
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
          <tr>
            <td>{{hotel.id}}</td>
            <td>{{hotel.nome}}</td>
            <td>{{hotel.cnpj}}</td>
            <td>{{hotel.pais}}</td>
            <td>{{hotel.estado}}</td>
            <td>{{hotel.cidade}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>

  export default {
    name: "HotelDetails",
    props: {
      hotel: Object
    }
  }

</script>

<style scoped>

  div {
    background-color: white;
    margin-top: 50px;
    text-align: center;
  }

  h1 {
    margin-bottom: 30px;
  }

  table {
   width: 800px;
 }

 tr {
   height: 30px;
   text-align: center;
 }

  th {
    height: 40px;
  }
</style>
