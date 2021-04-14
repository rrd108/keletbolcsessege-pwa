<template>
  <header>
    <nav>
      <img src="~/assets/logo.png" alt="logo" />
      <FontAwesomeIcon icon="book-open" v-show="title"></FontAwesomeIcon>
      <FontAwesomeIcon icon="volume-up" v-show="title"></FontAwesomeIcon>
      <FontAwesomeIcon icon="play-circle" v-show="title"></FontAwesomeIcon>
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
};
</script>


<style lang="scss">
header {
  height: 65px;
  /* mask used as we want to color the background svg */
  background-color: #483a1d;
  mask-image: url('~assets/header-bg.svg');
  mask-position: bottom;
  mask-repeat: no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
      margin: 0 0 .5rem 0;
    }
    h3 {
      font-size: .85rem;
      margin: 0;
    }
    h4 {
      font-size: 0.85rem;
      font-weight: 500;
      margin: 0 0 .25rem 0;
    }
  }
}
</style>