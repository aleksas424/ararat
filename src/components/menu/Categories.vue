<script setup>
import { ref, watch } from "vue";

// Props
defineProps({
  categories: Array,
  selectedCategory: String,
});

// Emit event to the parent
const emit = defineEmits(["select-category"]);

// Method to handle category selection
function selectCategory(category) {
  emit("select-category", category);
}
</script>

<template>
  <div class="categories">
    <ul>
      <li
        v-for="category in categories"
        :key="category.name"
        :class="{ active: category.name === selectedCategory }"
        @click="selectCategory(category.name)"
        tabindex="0"
        @keydown.enter="selectCategory(category.name)"
      >
        <span class="emoji" aria-hidden="true">{{ category.emoji }}</span>
        <span class="category-name">{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.categories {
  margin-top: 1rem;
  padding: 0;
}

.categories ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* Prisitaikantis tinklas */
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories li {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  background-color: black;
  color: white;
  transition: background-color 0.3s, color 0.3s, transform 0.2s ease;
}

.categories li.active {
  background-color: green;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtilus šešėlis */
}

.categories li:hover {
  background-color: darkgreen;
  transform: scale(1.05); /* Mastelio didinimas užvedant pelę */
}

.categories li:focus {
  outline: 2px solid green;
  outline-offset: 2px; /* Klaviatūros navigacijos stilius */
}

.emoji {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

.category-name {
  font-size: 1rem;
  text-transform: capitalize; /* Pirmoji raidė didžioji */
}

/* Mažesni ekranai */
@media (max-width: 768px) {
  .categories ul {
    gap: 0.3rem; /* Mažesni tarpai */
  }

  .categories li {
    padding: 0.5rem 0.8rem; /* Mažesni vidiniai tarpai */
  }

  .emoji {
    font-size: 1rem; /* Mažesnis piktogramos dydis */
  }

  .category-name {
    font-size: 0.9rem; /* Mažesnis tekstas */
  }
}

@media (max-width: 480px) {
  .categories li {
    flex-direction: column; /* Eilutės išdėstymas */
    padding: 0.5rem; /* Mažesni tarpai */
  }

  .emoji {
    margin-right: 0; /* Nuimamas tarpas */
    margin-bottom: 0.3rem; /* Tarpas apačioje */
  }
}
</style>