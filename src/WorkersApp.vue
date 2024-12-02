<template>
  <div class="app">
    <aside class="sidebar">
      <button class="exit-button">EXIT</button>
    </aside>
    <main class="content">
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

// Užsakymų sąrašas
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

// Pasirinktas užsakymas
const selectedOrder = ref(null);

// Veiksmai užsakymams
const handleReject = (orderId) => {
  console.log(`Rejected order ID: ${orderId}`);
};

const handleReady = (orderId) => {
  console.log(`Order ID ${orderId} is ready.`);
};
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Šoninis meniu */
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
}

/* Pagrindinis turinys */
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