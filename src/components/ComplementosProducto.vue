<template>
    <div class="complementos">
      <h2>Complementos Producto</h2>
      <p>Detalles de complementos...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ComplementosProducto',
    data() {
      return {
        producto: 'Gorra de verano',
        precio: 15
      }
    }
  }
  </script>
  
  <style scoped>
  .complementos {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #e0e0e0;
  }
  </style>
  