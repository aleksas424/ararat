<script setup>
import { ref } from "vue";

// Užsakymo būsena
const isOpen = ref(false);
const cart = ref([
  {
    id: 1,
    name: "Kotletai",
    price: 12.0,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Cacikas",
    price: 5.0,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
]);

const isOrderConfirmed = ref(false);

// Užsakymo sekcijos atidarymo/uždarymo funkcijos
function toggleOrder() {
  isOpen.value = !isOpen.value;
}

// Pridėti produkto kiekį
function increaseQuantity(productId) {
  const product = cart.value.find((item) => item.id === productId);
  if (product) {
    product.quantity += 1;
  }
}

// Sumažinti produkto kiekį
function decreaseQuantity(productId) {
  const product = cart.value.find((item) => item.id === productId);
  if (product && product.quantity > 1) {
    product.quantity -= 1;
  }
}

// Pašalinti produktą iš užsakymo
function removeProduct(productId) {
  cart.value = cart.value.filter((item) => item.id !== productId);
}

// Apskaičiuoti bendrą sumą
function calculateTotal() {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}
</script>

<template>
  <div>
    <!-- Užsakymo peržiūros mygtukas -->
    <button class="view-order-btn" @click="toggleOrder">
      Peržiūrėti užsakymą ({{ cart.length }})
    </button>

    <!-- Užsakymo sekcija -->
    <div class="order-section" :class="{ open: isOpen }">
      <!-- Viršutinė užsakymo juosta -->
      <div class="order-header">
        <span>Užsakymas ({{ cart.length }})</span>
        <button class="close-btn" @click="toggleOrder">✕</button>
      </div>

      <!-- Užsakymo turinys -->
      <div class="order-content">
        <div
          v-for="product in cart"
          :key="product.id"
          class="order-item"
        >
          <img
            :src="product.image"
            alt="Patiekalo nuotrauka"
            class="order-image"
          />
          <div class="order-details">
            <span>{{ product.name }}</span>
            <div class="price-and-quantity">
              <span>{{ (product.price * product.quantity).toFixed(2) }} £</span>
              <div class="quantity-controls">
                <button @click="decreaseQuantity(product.id)">-</button>
                <span>{{ product.quantity }}</span>
                <button @click="increaseQuantity(product.id)">+</button>
              </div>
            </div>
          </div>
          <button class="remove-btn" @click="removeProduct(product.id)">
            🗑️
          </button>
        </div>

        <!-- Bendra suma -->
        <div class="order-total">
          <strong>Viso:</strong>
          <span>{{ calculateTotal() }} £</span>
        </div>

        <!-- Užsakymo patvirtinimas -->
        <div class="order-confirmation">
          <input
            type="checkbox"
            id="confirm-order"
            v-model="isOrderConfirmed"
          />
          <label for="confirm-order">Patvirtinu savo užsakymą</label>
        </div>

        <!-- Pateikti užsakymą -->
        <button class="submit-order-btn" :disabled="!isOrderConfirmed">
          Uzsakyti
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Užsakymo sekcija */
.order-section {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  background-color: #1c1c1e;
  color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
}

.order-section.open {
  bottom: 0;
}

/* Užsakymo viršutinė juosta */
.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2c2c2e;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.order-header span {
  font-size: 1.2rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Užsakymo turinys */
.order-content {
  padding: 1rem;
}

.order-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.order-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 1rem;
}

.order-details {
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  gap: 1rem;
  color: white;
}

.price-and-quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-controls button {
  background: #333;
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
}

.remove-btn {
  background: none;
  border: none;
  color: red;
  font-size: 1.2rem;
  cursor: pointer;
}

.order-total {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #333;
}

.order-confirmation {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.submit-order-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
}

.submit-order-btn:disabled {
  background-color: grey;
  cursor: not-allowed;
}

/* Užsakymo peržiūros mygtukas */
.view-order-btn {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: green;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
