<template>
  <div id="home">
    <header>
      <svg
        width="360"
        height="100"
        viewBox="0 125 360 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M171 210C109.327 231.444 34.5384 228.63 -50 210L-58 -3L421 -8V210C377.692 226.28 356.635 225.738 324 210C259.292 183.973 232.673 188.556 171 210Z"
          fill="#483A1F"
        />
      </svg>
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
#home {
  position: relative;

  nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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