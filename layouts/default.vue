<template>
  <div id="app">
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: $secondary;
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
  max-width: 450px;
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
// enter-active, leave-active
// enter, leave-to

.home-leave-active,
.home-enter-active,
.take-apart-leave-active,
.take-apart-leave-active section,
.take-apart-leave-active h2,
.take-apart-leave-active .block-title,
.take-apart-enter-active,
header,
main {
  transition: all $transition-length ease-in-out;
}

.take-apart-leave-to section,
.take-apart-leave-to h2 {
  opacity: 0;
}

.take-apart-leave-to.quote #quote-title,
.take-apart-leave-to.bhagavad-gita #bhagavad-gita-title,
.take-apart-leave-to.vlog #vlog-title {
  top: $title-top;
  left: $title-left;
  opacity: 1;
}

.take-apart-leave-active main {
  animation: shrink-flip $transition-length ease forwards;
}
.take-apart-enter-active main {
  animation: shrink-flip $transition-length ease reverse forwards;
}
@keyframes shrink-flip {
  50%,
  100% {
    transform: scale(0.9);
    box-shadow: 0.1rem 0.1rem 1rem unquote($primary + '30'), -0.1rem -0.1rem 1rem unquote($primary + '30');
  }
  100% {
    transform: rotateY(-90deg);
  }
}

// TODO change which one goes where based on the selected item?
.take-apart-leave-to .bhagavad-gita {
  transform: translateX(-100vw);
}
.take-apart-leave-to .vlog {
  transform: translateX(100vw);
}
.take-apart-leave-to header {
  height: $header-open-height;
}
.take-apart-leave-to.quote header {
  background-color: $block-one;
}
.take-apart-leave-to.bhagavad-gita header {
  background-color: $block-two;
}
.take-apart-leave-to.vlog header {
  background-color: $block-three;
}
.take-apart-leave-to section div {
  opacity: 0;
}
/*
  default positions, colors should be here
  if they are in the page file, the transition will not work
  because the css there is later than this, so values will be overwritten
*/
.block-title {
  position: absolute;
  z-index: 1;
  left: 1.2em;
}
section.quote {
  background-color: $block-one;
}
#quote-title {
  top: 3.5em;
}
section.bhagavad-gita {
  background-color: $block-two;
}
#bhagavad-gita-title {
  top: 9.2em;
}
section.vlog {
  background-color: $block-three;
}
#vlog-title {
  top: 14.9em;
}
</style>
