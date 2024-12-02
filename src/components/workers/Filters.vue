<template>
    <div class="filters">
      <label for="statusFilter">Filter by status:</label>
      <select v-model="status" id="statusFilter">
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        status: '',
      };
    },
    watch: {
      status(newStatus) {
        this.$emit('filter-changed', { status: newStatus });
      },
    },
  };
  </script>
  
  <style scoped>
  .filters {
    margin: 16px 0;
  }
  
  select {
    padding: 8px;
    margin-left: 8px;
  }
  </style>
  