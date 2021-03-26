<template>
  <div id="app">
    <nav>
      <router-link to="/"><FontAwesomeIcon icon="lightbulb"></FontAwesomeIcon> Ma</router-link>
      <router-link to="/starred"><FontAwesomeIcon icon="star"></FontAwesomeIcon> Stars</router-link>
    </nav>
    <main>
      <Nuxt />
    </main>
    <footer>
      <img src="~/assets/KV-logo-final-brown.png">
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
  color: #483A1F;
}

nav {
  margin: 0;
  text-align: center;
  border-top: 2vh solid #431;
  font-size: 1.5rem;
}

nav a {
  font-weight: bold;
  color: #431;
  padding: 1vh;
}

nav a.nuxt-link-exact-active {
  color: #eda;
  background: #431;
}

main {
  margin: 5vw;
}

footer img {
  position: absolute;
  right: 2vw;
  bottom: 2vh;
  width: 50%;
  height: auto;
  opacity: 0.3;
}

</style>
