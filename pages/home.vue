<template>
  <div>
    <AppHeader />
    <main>
      <NuxtLink to="/quote">
        <section>
          <h2>Napi bölcsesség</h2>
          <div><FontAwesomeIcon icon="book-open"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>

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
export default {
  transition: {name: 'home', mode: 'out-in'}
};
</script>

<style scoped lang="scss">
main {
  padding: 1rem;

  section {
    background-color: #5ab1bb;
    color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;

    &.sound {
      background-color: #094d92;
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