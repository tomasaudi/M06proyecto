<template>
    <div class="calzado">
      <h2>Calzado Producto</h2>
      <p>Detalles del calzado...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CalzadoProducto',
    data() {
      return {
        producto: 'Zapatos deportivos',
        precio: 50
      }
    }
  }
  </script>
  
  <style scoped>
  .calzado {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f0f0;
  }
  </style>
  