<template>
  <header>
    <nav>
      <NuxtLink to="/home"><img src="~/assets/logo.png" alt="logo" /></NuxtLink>
      <NuxtLink to="/quote">
        <FontAwesomeIcon icon="book-open" v-show="title"></FontAwesomeIcon>
      </NuxtLink>
      <NuxtLink to="/bhagavad-gita">
        <FontAwesomeIcon icon="volume-up" v-show="title"></FontAwesomeIcon>
      </NuxtLink>
      <NuxtLink to="/vlog">
        <FontAwesomeIcon icon="play-circle" v-show="title"></FontAwesomeIcon>
      </NuxtLink>
      <FontAwesomeIcon icon="cog"></FontAwesomeIcon>
    </nav>
    <section>
      <h2>{{ title }}</h2>
      <h4>{{ subtitle }}</h4>
      <h3>{{ chapter }}</h3>
    </section>
  </header>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'chapter'],
}
</script>


<style lang="scss">
header {
  height: $header-closed-height;
  /* mask used as we want to color the background svg */
  background-color: $primary;
  mask-image: url('~assets/header-bg.svg');
  mask-position: bottom;
  mask-repeat: no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position:relative;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;

    img {
      width: 4rem;
      margin: -0.7rem;
    }

    svg {
      margin-top: 0.1rem;
    }

    a:not(:first-child)::after {
      content: '';
      width: 0.2em;
      height: 0.2em;
      display: inline-block;
      border-radius: 50%;
      position: relative;
      top: 1rem;
      left: -50%;
    }
    a.nuxt-link-exact-active:not(:first-child)::after {
      background: $secondary;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;
    margin-bottom: 3rem;

    h2 {
      font-size: 1.7rem;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
      // we need absolute position so we can move the titles to this exact position
      position: absolute;
      top: $title-top;
      left: $title-left;
    }
    h3 {
      font-size: 0.85rem;
      margin: 0;
    }
    h4 {
      font-size: 0.85rem;
      font-weight: 500;
      margin: 0 0 0.25rem 0;
    }
  }
}

.home-leave-to {
  header {
    nav a:not(:first-child), section {
      opacity: 0;
    }
  }
}
</style>