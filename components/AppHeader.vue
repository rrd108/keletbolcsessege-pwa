<template>
  <header>
    <nav>
      <img src="~/assets/logo.png" alt="logo" />
      <FontAwesomeIcon icon="cog"></FontAwesomeIcon>
    </nav>
  </header>
</template>

<style lang="scss">
header {
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
}
</style>