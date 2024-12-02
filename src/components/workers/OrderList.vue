<template>
  <div class="orders-list">
    <Filters @filter-changed="updateFilter" />
    <div class="orders-grid">
      <OrderCard
        v-for="order in filteredOrders"
        :key="order.id"
        :order="order"
        @select="viewOrderDetails(order)"
      />
    </div>

    <!-- Modal for selected order -->
    <div v-if="selectedOrder" class="modal" role="dialog" aria-labelledby="order-details-title" aria-modal="true">
      <OrderDetails
        :order="selectedOrder"
        @close="closeOrderDetails"
        @accept="acceptOrder"
        @reject="rejectOrder"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useOrdersStore } from '../store/order.js'; // Updated path
import Filters from './Filters.vue'; // Adjusted path
import OrderCard from './OrderCard.vue'; // Adjusted path
import OrderDetails from './OrderDetails.vue'; // Adjusted path

export default {
  components: { Filters, OrderCard, OrderDetails },
  setup() {
    const ordersStore = useOrdersStore();
    const selectedOrder = ref(null);

    const updateFilter = (newFilter) => {
      ordersStore.setFilter(newFilter);
    };

    const filteredOrders = computed(() => {
      return ordersStore.filteredOrders;
    });

    const viewOrderDetails = (order) => {
      selectedOrder.value = order;
    };

    const closeOrderDetails = () => {
      selectedOrder.value = null;
    };

    const acceptOrder = (orderId) => {
      ordersStore.acceptOrder(orderId);
      closeOrderDetails();
    };

    const rejectOrder = (orderId) => {
      ordersStore.rejectOrder(orderId);
      closeOrderDetails();
    };

    return {
      filteredOrders,
      selectedOrder,
      updateFilter,
      viewOrderDetails,
      closeOrderDetails,
      acceptOrder,
      rejectOrder,
    };
  },
};
</script>

<style>
.orders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

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
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>