<template>
  <div id="app">
    <Nuxt />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #ede0c5;
}

body,
button {
  font-family: "Montserrat", sans-serif;
}

#app {
  font-size: 2rem;
  color: #483a1f;
  background-image: url("~/assets/background.png");
  background-size: 35rem;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
}

svg:not(:root).svg-inline--fa {
  color: #fff;
}
</style>
