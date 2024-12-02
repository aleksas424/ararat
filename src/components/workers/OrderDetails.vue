<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Order #{{ order.id }}</h2>
        <p>Type: {{ order.type }}</p>
        <p>Total: ${{ order.total }}</p>
  
        <h3>Items:</h3>
        <ul>
          <li v-for="item in order.items" :key="item.name">
            {{ item.name }} x {{ item.quantity }} = ${{ item.quantity * item.price }}
          </li>
        </ul>
  
        <button @click="$emit('close')">Close</button>
        <button @click="$emit('accept', order.id)">Accept</button>
        <button @click="$emit('reject', order.id)">Reject</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: Object
    }
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
  }
  </style>
