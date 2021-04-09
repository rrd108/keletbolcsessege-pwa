<template>
  <div>
    <header>
      <nav>
        <img src="~/assets/logo.png" alt="logo" />
        <FontAwesomeIcon icon="cog"></FontAwesomeIcon>
      </nav>
    </header>
    <main>
      <section>
        <h2>Napi bölcsesség</h2>
        <div><FontAwesomeIcon icon="book-open"></FontAwesomeIcon></div>
      </section>

      <section class="sound">
        <h2>Bhagavad-gita</h2>
        <div><FontAwesomeIcon icon="volume-up"></FontAwesomeIcon></div>
      </section>

      <section class="video">
        <h2>Sivarama Swami</h2>
        <div><FontAwesomeIcon icon="play-circle"></FontAwesomeIcon></div>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>

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
      margin-top: .1rem;
    }
  }
}

main {
  padding: 1rem;

  section {
    background-color: #5ab1bb;
    color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;

    &.sound {
      background-color: #094D92;
    }

    &.video {
      background-color: #861388;
    }

    h2 {
      font-size: 1.7rem;
      font-weight: 500;
      margin: 0 0 2rem 0;
    }

    div {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>