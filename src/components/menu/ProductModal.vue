<template>
  <div
    class="modal-overlay"
    @click.self="$emit('close')"
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    aria-modal="true"
    tabindex="-1"
  >
    <div class="modal-content">
      <!-- Uždarimo mygtukas -->
      <button class="close-button" @click="$emit('close')" aria-label="Close modal">✕</button>

      <!-- Produkto nuotrauka -->
      <img
        :src="item.image || 'placeholder.jpg'"
        :alt="item.name || 'Product image'"
        class="modal-image"
      />

      <!-- Produkto pavadinimas ir aprašymas -->
      <h2 id="modal-title" class="modal-title">{{ item.name || 'Unknown Product' }}</h2>
      <p id="modal-description" class="modal-description">
        {{ item.description || 'No description available.' }}
      </p>

      <!-- Ingredientų pasirinkimas -->
      <h3 v-if="item.ingredients && item.ingredients.length" class="modal-subtitle">
        Choose your ingredients:
      </h3>
      <ul class="ingredients" v-if="item.ingredients && item.ingredients.length">
        <li v-for="(ingredient, index) in item.ingredients" :key="index">
          <label>
            <input
              type="checkbox"
              :value="ingredient"
              v-model="selectedIngredients"
            />
            {{ ingredient }}
          </label>
        </li>
      </ul>
      <p v-else class="no-ingredients">
        No ingredients available for this product.
      </p>

      <!-- Produkto kaina -->
      <span class="modal-price">
        Price: {{ item.price ? `$${item.price.toFixed(2)}` : 'Not available' }}
      </span>

      <!-- Mygtukas įdėti į krepšelį -->
      <button class="add-to-cart-button" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        name: "Unknown Product",
        description: "No description available.",
        image: "placeholder.jpg",
        price: null,
        ingredients: [],
      }),
    },
  },
  data() {
    return {
      selectedIngredients: [], // Pasirinkti ingredientai
    };
  },
  watch: {
    // Stebime `item.ingredients` ir atnaujiname reaktyviai
    "item.ingredients": {
      immediate: true,
      handler(newIngredients) {
        this.selectedIngredients = [...(newIngredients || [])];
      },
    },
  },
  methods: {
    addToCart() {
      const cartItem = {
        ...this.item,
        selectedIngredients: this.selectedIngredients,
      };
      this.$emit("add-to-cart", cartItem); // Siunčiame duomenis į tėvinį komponentą
      this.$emit("close"); // Uždaryti modalą
    },
  },
};
</script>

<style scoped>
/* Fono uždanga */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Švelnesnis fonas */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeInOverlay 0.3s ease-out;
}

/* Modalinio lango turinys */
.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
  animation: fadeInContent 0.3s ease-out;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

/* Produkto nuotrauka */
.modal-image {
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease; /* Nuotraukos animacija */
}
.modal-image:hover {
  transform: scale(1.05); /* Poveikis užvedus pelės žymeklį */
}

/* Uždarymo mygtukas */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
}
.close-button:hover {
  color: #eb5757;
}

/* Produkto pavadinimas */
.modal-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
}

/* Produkto aprašymas */
.modal-description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #555;
  line-height: 1.6;
}

/* Ingredientų sąrašas */
.ingredients {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  font-size: 0.95rem;
  color: #333;
  text-align: left;
}
.ingredients li {
  margin-bottom: 0.8rem; /* Padidintas tarpas tarp ingredientų */
}
.ingredients label {
  cursor: pointer;
  transition: color 0.3s ease;
}
.ingredients label:hover {
  color: #f05a24; /* Spalvų pokytis užvedus */
}
.no-ingredients {
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

/* Produkto kaina */
.modal-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #27ae60;
  display: block;
  margin-top: 1.5rem;
  text-align: left; /* Kaina kairėje */
}

/* Mygtukas įdėti į krepšelį */
.add-to-cart-button {
  background-color: #f05a24;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
  width: 100%; /* Užpildo visą plotį */
}
.add-to-cart-button:hover {
  background-color: #d04920;
}

/* Animacijos */
@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInContent {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsyvumas */
@media (max-width: 768px) {
  .modal-content {
    padding: 1rem;
  }
  .modal-title {
    font-size: 1.5rem;
  }
  .modal-description {
    font-size: 0.95rem;
  }
  .modal-price {
    font-size: 1rem;
  }
  .add-to-cart-button {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
