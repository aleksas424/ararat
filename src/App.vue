<template>
  <div>
    <!-- Navigacijos meniu -->
    <nav>
      <ul>
        <li>
          <router-link to="/menu">Menu</router-link>
        </li>
        <li>
          <router-link to="/workers">Workers</router-link>
        </li>
      </ul>
    </nav>
    
    <!-- Router vieta -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Navigacijos meniu stilius */
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem; /* Tarpas tarp elementų */
}

nav li {
  margin: 0;
}

/* Nuorodų stilius */
nav a {
  text-decoration: none; /* Panaikina pabraukimą */
  color: blue; /* Pagrindinė spalva */
  transition: color 0.3s ease; /* Spalvos animacija */
}

nav a:hover {
  color: darkblue; /* Spalvos pokytis užvedus pelės žymeklį */
}

nav a.router-link-active {
  font-weight: bold; /* Paryškinimas aktyviai nuorodai */
  color: green; /* Aktyvios nuorodos spalva */
}
</style>
