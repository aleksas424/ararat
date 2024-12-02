<template>
    <div class="app">
      <aside class="sidebar" role="navigation" aria-label="Main Navigation">
        <button class="exit-button" @click="handleExit">EXIT</button>
      </aside>
      <main class="content" role="main">
        <div v-if="selectedOrder" class="order-details-container">
          <OrderDetails
            :order="selectedOrder"
            @back="selectedOrder = null"
            @reject="handleReject"
            @ready="handleReady"
          />
        </div>
        <div v-else>
          <OrderList
            :orders="orders"
            @select-order="selectedOrder = $event"
          />
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import OrderList from '../workers/OrderList.vue';
  import OrderDetails from '../workers/OrderDetails.vue';
  
  // Sample orders
  const orders = ref([
    {
      id: 5836,
      type: 'DINE IN',
      time: '16:43',
      peopleCount: 7,
      items: [{ name: 'prawn raisukaree', quantity: 1, price: 12.0 }],
      total: 12.0,
    },
  ]);
  
  const selectedOrder = ref(null);
  
  // Handle order actions
  const handleReject = (orderId) => {
    console.log(`Rejected order ID: ${orderId}`);
  };
  
  const handleReady = (orderId) => {
    console.log(`Order ID ${orderId} is ready.`);
  };
  
  // Handle exit action
  const handleExit = () => {
    // Logic to handle exit, e.g., route change or logout
    console.log("Exiting application");
  };
  </script>
  
  <style scoped>
  .app {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  
  /* Sidebar */
  .sidebar {
    width: 80px;
    background-color: #0a192f;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 0;
  }
  
  .exit-button {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.3s ease; /* Add transition for hover effect */
  }
  
  .exit-button:hover {
    color: #eb5757; /* Change color on hover */
  }
  
  /* Main content */
  .content {
    flex: 1;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
  
  .order-details-container {
    width: 100%;
    max-width: 500px;
  }
  </style>