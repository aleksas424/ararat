<template>
    <div class="order-card" @click="$emit('select', order)">
      <h3>{{ order.type }} #{{ order.id }}</h3>
      <p>{{ order.items.length }} items</p>
      <p>Total: {{ order.total }} €</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: Object,
    },
  };
  </script>
  
  <style>
  .order-card {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .order-card:hover {
    background-color: #f9f9f9;
  }
  </style>