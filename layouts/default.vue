<template>
  <div id="app">
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #EDE0C5;
}

body, button {
  font-family: "Montserrat", sans-serif;
}

#app {
  font-size: 2rem;
  color: #483A1F;
  background-image: url('~/assets/background.png');
  background-size: 35rem;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
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
  text-decoration: none;
  padding: .3rem 1rem;
}

nav a.nuxt-link-exact-active {
  color: #eda;
  background: #431;
}

</style>
