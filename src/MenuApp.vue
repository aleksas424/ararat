<template>
  <div id="app">
    <header>
      <div class="header-content">
        <img src="./assets/logo.png" alt="Logo" class="logo" />
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

import Navbar from './components/menu/Navbar.vue';
import MenuList from './components/menu/MenuList.vue';
import ProductModal from './components/menu/ProductModal.vue';
import OrderSection from './components/menu/OrderSection.vue';
import Categories from './components/menu/Categories.vue';
import { ref } from 'vue';

const categories = [
  { name: "Populiarūs", emoji: "👌" },
  { name: "Sriubos", emoji: "🍲" },
  { name: "Salotos", emoji: "🥗" },
  { name: "Šašlykai", emoji: "🍢" },
  { name: "Karšti patiekalai", emoji: "🍛" },
  { name: "Žuvies patiekalai", emoji: "🐟" },
  { name: "Chačapuri", emoji: "🧀" },
  { name: "Makaronai", emoji: "🍝" },
  { name: "Miltiniai patiekalai", emoji: "🥟" },
  { name: "Užkandžiai", emoji: "🍤" },
  { name: "Vaikiškas meniu", emoji: "🧒" },
];

const menu = {
  "Populiarūs": [
    {
      name: "Prawn Raisukaree 🦐🥥🍋",
      description:
        "Lengvas kokosų ir citrusų karis su krevetėmis, mangetout, paprikomis, raudonais ir svogūnų laiškais.",
      price: "12.00 £",
      image: "https://via.placeholder.com/300",
      ingredients: ["🦐 Krevetės", "🥥 Kokosai", "🍋 Citrusai"],
    },
    {
      name: "Firecracker Prawn 🌶️🦐",
      description:
        "Aštrus patiekalas su krevetėmis, mangetout, raudonomis ir žaliomis paprikomis, svogūnais ir aitriosiomis paprikomis.",
      price: "11.00 £",
      image: "https://via.placeholder.com/300",
      ingredients: ["🦐 Krevetės", "🌶️ Paprikos", "🔥 Aitriosios paprikos"],
    },
  ],
  "Sriubos": [
    {
      name: "Hot Chicken Katsu Curry 🍛🐔",
      description:
        "Aštrus! Vištiena traškiuose panko džiūvėsėliuose, aplieta aštriu kario padažu.",
      price: "9.75 £",
      image: "https://via.placeholder.com/300",
      ingredients: ["🐔 Vištiena", "🍞 Panko", "🍛 Kario padažas"],
    },
    {
      name: "Tofu Firecracker 🌶️🍃",
      description:
        "Drąsus ir aštrus. Tofu, mangetout, raudonos ir žalios paprikos, svogūnai, aitriosios paprikos.",
      price: "9.75 £",
      image: "https://via.placeholder.com/300",
      ingredients: ["🍃 Tofu", "🌶️ Paprikos", "🔥 Aitriosios paprikos"],
    },
  ],
};

const selectedCategory = ref("Populiarūs");
const selectedProduct = ref(null);
const isModalOpen = ref(false);
const selectedLanguage = ref("lt");

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
