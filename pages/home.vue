<template>
  <div>
    <AppHeader />
    <main>
      <NuxtLink to="/quote">
        <section class="quote">
          <h2>Napi bölcsesség</h2>
          <div><FontAwesomeIcon icon="book-open"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>

      <NuxtLink to="/bhagavad-gita">
        <section class="sound">
          <h2>Bhagavad-gita</h2>
          <div><FontAwesomeIcon icon="volume-up"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>

      <section class="video">
        <h2>Sivarama Swami</h2>
        <div><FontAwesomeIcon icon="play-circle"></FontAwesomeIcon></div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  transition: { name: 'home', mode: 'out-in' },
};
</script>

<style scoped lang="scss">
main {
  padding: 1rem;

  section {
    background-color: $block-one;
    color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;

    &.sound {
      background-color: $block-two;
    }

    &.video {
      background-color: $block-three;
    }

    h2 {
      font-size: 1.7rem;
      font-weight: 700;
      margin: 0 0 2rem 0;
    }

    div {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>