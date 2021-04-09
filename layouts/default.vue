<template>
  <div id="app">
    <header>
      <nav>
        <img src="~/assets/logo.png" alt="logo" />
        <FontAwesomeIcon icon="cog"></FontAwesomeIcon>
      </nav>
    </header>
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

svg {
  color: #fff;
}

a {
  text-decoration: none;
}

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
