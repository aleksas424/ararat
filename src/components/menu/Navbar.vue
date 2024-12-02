<template>
  <nav class="categories" role="tablist">
    <button
      v-for="category in categories"
      :key="category.name"
      class="category-button"
      :class="{ active: selectedCategory === category.name }"
      :aria-pressed="selectedCategory === category.name"
      @click="$emit('select-category', category.name)"
      role="tab"
      tabindex="0"
      @keydown.enter="$emit('select-category', category.name)"
    >
      <span class="emoji" aria-hidden="true">{{ category.emoji }}</span>
      <span class="category-name">{{ category.name }}</span>
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Navbar container */
.categories {
  display: flex;
  flex-wrap: nowrap; /* Neleidžia elementams sulūžti į naują eilutę */
  overflow-x: auto; /* Horizontalus slinkimas */
  gap: 0.5rem; /* Tarpas tarp kategorijų */
  padding: 0.5rem 0;
  scrollbar-width: none; /* Paslepia standartinį slankiklį */
  position: relative;
}

/* Horizontalus slinkimas WebKit naršyklėse */
.categories::-webkit-scrollbar {
  display: none; /* Paslepia slankiklį */
}

/* Scroll indikatorius */
.categories::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
  pointer-events: none; /* Neleidžia interaktyvumo */
}

/* Kategorijų mygtukų stiliai */
.category-button {
  display: flex;
  align-items: center; /* Centruoja piktogramą ir tekstą vertikaliai */
  justify-content: center; /* Centruoja piktogramą ir tekstą horizontaliai */
  background-color: #1d1d1d; /* Tamsus fonas */
  color: #fff; /* Baltas tekstas */
  padding: 0.6rem 1rem; /* Vidiniai tarpai */
  border: none;
  border-radius: 12px; /* Mygtuko kampų užapvalinimas */
  cursor: pointer;
  min-width: 120px; /* Minimalus mygtuko plotis */
  flex-shrink: 0; /* Neleidžia mygtukams mažėti */
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtilus šešėlis */
}

/* Mygtuko užvedimo efektas */
.category-button:hover {
  background-color: #333; /* Šviesesnis tamsus fonas */
  transform: scale(1.05); /* Šiek tiek padidina mygtuką */
}

/* Aktyvus mygtukas */
.category-button.active {
  background-color: #4caf50; /* Žalias fonas aktyviam mygtukui */
  color: #fff;
  font-weight: bold; /* Paryškintas tekstas */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Aktyvus mygtukas turi ryškesnį šešėlį */
}

/* Piktogramų ir kategorijų teksto stilius */
.emoji {
  font-size: 1.5rem; /* Padidintas piktogramos dydis */
  margin-right: 0.5rem; /* Tarpas tarp piktogramos ir teksto */
}

.category-name {
  font-size: 1rem; /* Teksto dydis */
  text-transform: capitalize; /* Pirmoji raidė didžioji */
}

/* Mažesni ekranai */
@media (max-width: 768px) {
  .category-button {
    min-width: 100px; /* Mažesnis minimalus plotis */
    padding: 0.4rem 0.8rem; /* Mažesni vidiniai tarpai */
  }

  .emoji {
    font-size: 1.2rem; /* Mažesnis piktogramos dydis */
  }

  .category-name {
    font-size: 0.9rem; /* Mažesnis teksto dydis */
  }
}

@media (max-width: 480px) {
  .category-button {
    min-width: 80px; /* Dar mažesnis minimalus plotis */
    padding: 0.4rem 0.6rem; /* Dar mažesni vidiniai tarpai */
  }

  .emoji {
    font-size: 1rem; /* Mažiausias piktogramos dydis */
  }

  .category-name {
    font-size: 0.8rem; /* Mažiausias teksto dydis */
  }
}
</style>