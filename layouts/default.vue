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
  color: $primary;
  background-image: url('~/assets/background.png');
  background-size: 35rem;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
}

svg {
  color: #fff;
}

a {
  text-decoration: none;
}

main {
  padding: 1rem;
}

/* transitions */
.home-leave-active,
.home-enter-active,
.quote-leave-active,
.quote-leave-active section,
.quote-leave-active header,
.quote-enter-active {
  transition: all .5s;
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

.quote-leave-active .quote {
  transform: translate(-1rem, -24.9vh);
  background-color: rgba($primary, 0);
}
.quote-leave-active .sound {
  transform: translateX(-100vw);
}
.quote-leave-active .video {
  transform: translateX(100vw);
}
.quote-leave-active header {
  height: 200px;
  background-color: $block-one;
}
.quote-leave-active section div {
  opacity: 0;
}

</style>
