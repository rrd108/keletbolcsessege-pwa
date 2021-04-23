<template>
  <div v-touch:swipe="swipeHandler">
    <AppHeader
      title="Napi bölcsesség"
      :subtitle="today"
      chapter="Bhagavad-gita 2.48"
    />
    <main>
      <p>
        Végezd kötelességed megingathatatlanul, óh, Arjuna, s ne ragaszkodj se a
        sikerhez, se a kudarchoz! Az ilyen kiegyensúlyozottságot hívják yogának.
      </p>
    </main>
  </div>
</template>

<script>
export default {
  transition: 'take-apart',
  data() {
    return {
      today: new Date().toLocaleDateString('hu-HU', {
        month: 'long',
        day: 'numeric',
      }),
    }
  },
  // TODO the quote should be get from the server randomly daily #6
  methods: {
    swipeHandler(direction) {
      if (direction == 'left') {
        this.$router.push({ path: '/bhagavad-gita' })
      }
      if (direction == 'right') {
        this.$router.push({ path: '/home' })
      }
    },
  },
}
</script>

<style scoped lang="scss">
header {
  height: $header-open-height;
  background-color: $block-one;

  section {
    opacity: 1;
  }
}
p {
  font-size: 1.7rem;
  line-height: 2.7rem;
  margin: 0;
}
.home-leave-to {
  header {
    background-color: $primary;
    height: $header-closed-height;
  }
  main {
    section {
      transform: translate(0);
    }
  }
}
</style>
