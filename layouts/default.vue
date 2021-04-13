<template>
  <div id="app">
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #ede0c5;
}

body,
button {
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-size: 2rem;
  color: #483a1f;
  background-image: url('~/assets/background.png');
  background-size: 35rem;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
}

svg {
  color: #fff;
}

a {
  text-decoration: none;
}

/* transitions */

.home-leave-active,
.home-enter-active {
  transition: transform 0.5s;
}
.home-leave-to {
  transform: translateY(-100vh);
}
.home-enter {
  transform: translateY(-100vh);
}
.home-enter-to {
  transform: translateY(0);
}
</style>
