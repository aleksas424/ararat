<template>
  <div class="menu-item" @click="openDetails">
    <img :src="item.image" :alt="item.name" class="menu-item-image" />
    <div class="menu-item-details">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <span class="menu-item-price">{{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openDetails() {
      this.$emit("openModal", this.item);
    },
  },
};
</script>

<style scoped>
.menu-item {
  flex: 0 1 calc(50% - 1rem);
  max-width: calc(50% - 1rem);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-bottom: 1rem;
}

.menu-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.menu-item-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.menu-item-details {
  padding: 1rem;
  text-align: center;
}

.menu-item-details h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.menu-item-details p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.menu-item-price {
  font-size: 1rem;
  font-weight: bold;
  color: #2a9d8f;
}

@media (max-width: 768px) {
  .menu-item {
    flex: 0 1 calc(100% - 1rem);
    max-width: calc(100% - 1rem);
  }
}
</style>