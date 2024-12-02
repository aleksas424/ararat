<template>
  <div class="menu">
    <div v-if="menu && menu.length" class="menu-grid">
      <MenuItem
        v-for="item in menu"
        :key="item.name"
        :item="item"
        @openModal="$emit('openModal', item)"
      ></MenuItem>
    </div>
    <p v-else>There are no items in this category.</p>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  components: { MenuItem },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.menu {
  padding: 1rem;
}

.menu-grid {
  display: flex;
  flex-wrap: wrap; /* Leisti perėjimą į naują eilutę */
  gap: 1rem;
  justify-content: flex-start; /* Išdėstymas kairėje */
}

.menu-grid > * {
  flex: 1 1 200px; /* Minimalus plotis 200px, elementai užima tiek vietos, kiek reikia */
  max-width: 300px; /* Maksimalus plotis (pasirinktinai) */
}

p {
  text-align: center;
  font-size: 1rem;
  color: #555;
}
</style>