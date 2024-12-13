<template>
    <div class="ropa">
      <h2>Ropa Categoría</h2>
      <p>Detalles de ropa...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RopaCategoria',
    data() {
      return {
        categoria: 'Camisetas',
        productos: ['Camiseta 1', 'Camiseta 2']
      }
    }
  }
  </script>
  
  <style scoped>
  .ropa {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #d0d0d0;
  }
  </style>
  