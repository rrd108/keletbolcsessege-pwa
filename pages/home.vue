<template>
  <div>
    <AppHeader />
    <main>
      <NuxtLink to="/quote">
        <h2 class="block-title" id="quote-title">Napi bölcsesség</h2>
        <section class="quote">
          <div><FontAwesomeIcon icon="book-open"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>

      <NuxtLink to="/bhagavad-gita">
        <h2 class="block-title" id="bhagavad-gita-title">Bhagavad-gita</h2>
        <section class="bhagavad-gita">
          <div><FontAwesomeIcon icon="volume-up"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>

      <NuxtLink to="/vlog">
        <h2 class="block-title" id="vlog-title">Sivarama Swami</h2>
        <section class="vlog">
          <div><FontAwesomeIcon icon="play-circle"></FontAwesomeIcon></div>
        </section>
      </NuxtLink>
    </main>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'home',
    beforeLeave(element) {
      // add a css className to the element for manipulating the header bg color
      element.classList.add(this.routerViewKey.replace(/\//, ''))
    },
  },
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
      margin-top: 2em;
    }
  }
}
</style>