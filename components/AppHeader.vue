<template>
  <header>
    <nav>
      <img src="~/assets/logo.png" alt="logo" />
      <FontAwesomeIcon icon="cog"></FontAwesomeIcon>
    </nav>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  props: ['title'],
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

  h2 {
    font-size: 1.7rem;
    font-weight: 500;
    margin: 0 0 2rem 2rem; /* right margin = main padding: 1rem + section padding: 1rem +  */
    color: #fff;
  }
}
</style>