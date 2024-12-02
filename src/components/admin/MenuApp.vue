<template>
    <div id="app">
      <header>
        <div class="header-content">
          <img src="assets/logo.png" alt="Logo" class="logo" />
          <select v-model="selectedLanguage" class="language-select">
            <option value="lt">Lietuvių</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="es">Español</option>
          </select>
        </div>
      </header>
      <Navbar />
      <Categories
        :categories="categories"
        :selectedCategory="selectedCategory"
        @select-category="selectCategory"
      />
      <MenuList :menu="menu[selectedCategory]" @openModal="openModal" />
      <ProductModal
        v-if="isModalOpen"
        :item="selectedProduct"
        @close="closeModal"
      />
      <OrderSection />
    </div>
  </template>
  
  <script setup>
  import Navbar from '../menu/Navbar.vue'; // Adjusted path
  import MenuList from '../menu/MenuList.vue'; // Adjusted path
  import ProductModal from '../menu/ProductModal.vue'; // Adjusted path
  import OrderSection from '../menu/OrderSection.vue'; // Adjusted path
  import Categories from '../menu/Categories.vue'; // Adjusted path
  import { ref } from 'vue';
  
  const categories = [ /* ... your categories ... */ ];
  const menu = { /* ... your menu ... */ };
  const selectedCategory = ref("Populiarūs");
  const selectedProduct = ref(null);
  const isModalOpen = ref(false);
  
  function selectCategory(category) {
    selectedCategory.value = category;
  }
  
  function openModal(item) {
    selectedProduct.value = item;
    isModalOpen.value = true;
  }
  
  function closeModal() {
    isModalOpen.value = false;
    selectedProduct.value = null;
  }
  </script>
  
  <style scoped>
  /* Header styles */
  header {
    background-color: green;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    max-height: 80px;
  }
  
  .language-select {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
  }
  
  #app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 768px) {
    #app {
      padding: 0.5rem;
    }
  }
  </style>