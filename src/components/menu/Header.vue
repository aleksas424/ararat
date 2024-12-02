<template>
  <header>
    <div class="header-content">
      <div class="logo-container">
        <img src="src/assets/logo.png" alt="Logo" class="logo" />
        <span class="brand-name"></span>
      </div>
      <select v-model="selectedLanguage" class="language-select">
        <option value="en">English</option>
        <option value="lt">Lietuvių</option>
        <option value="ru">Русский</option>
        <option value="es">Español</option>
      </select>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const selectedLanguage = ref("en");

</script>

<style scoped>

.header {
  text-align: center;
  padding: 1rem 0;
  font-size: 1.2rem;
  background-color: #2c2c2e;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  max-height: 40px;
  margin-right: 0.5rem;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.language-select {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  background-color: #f8f8f8;
  border: none;
}
</style>
<script></script>