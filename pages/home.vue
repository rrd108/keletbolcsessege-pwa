<template>
  <div>
    <AppHeader />
    <main>
      <NuxtLink to="/quote">
        <section class="quote">
          <h2 class="block-title" id="quote-title">Napi bölcsesség</h2>
          <div><FontAwesomeIcon icon="book-open"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>

      <NuxtLink to="/bhagavad-gita">
        <section class="bhagavad-gita">
          <h2 class="block-title" id="bhagavad-gita-title">Bhagavad-gita</h2>
          <div><FontAwesomeIcon icon="volume-up"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>

      <NuxtLink to="/videos">
        <section class="videos">
          <h2 class="block-title" id="videos-title">Videók</h2>
          <div><FontAwesomeIcon icon="play-circle"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>
    </main>
  </div>
</template>

<script>
export default {
  transition: 'home',
}
</script>

<style scoped lang="scss">
main {
  padding: 0.5em;

  a {
    color: #fff;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0 0 2rem 0;
  }
  section {
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;

    div {
      display: flex;
      justify-content: flex-end;
    }
  }
}

.home-enter main {
  section {
    opacity: 0;
  }
  .videos {
    transform: translateX(100vw);
  }
  .bhagavad-gita {
    transform: translateX(-100vw);
  }
}
.take-apart-leave-active main {
  animation: none;
}
</style>