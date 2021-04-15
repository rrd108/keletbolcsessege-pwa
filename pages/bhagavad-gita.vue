<template>
  <div>
    <AppHeader
      title="Bhagavad-gita"
      subtitle="hangoskönyv"
      chapter="1. fejezet"
    />
    <main>
      <section id="icon" :class="{ playing: playing }">
        <FontAwesomeIcon icon="volume-up"></FontAwesomeIcon>
      </section>
      <section id="remote">
        <FontAwesomeIcon icon="backward"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon="play"
          class="middle-button"
          @click="play"
          v-show="!playing"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon="pause"
          class="middle-button"
          @click="play"
          v-show="playing"
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon="forward"></FontAwesomeIcon>
      </section>

      <h5>4. vers</h5>
      <h6 :style="`width: ${currentTimePercent}%`"></h6>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: null,
      bg: {
        texts: [
          [0, '16-18', '21-22', '37-38', 46],
          [0, '42-43', 72],
        ],
      },
      currentTimePercent: 0,
      link: 'https://krisna.hu/bhagavad-gita/',
      playing: false,
    };
  },
  created() {
    this.audio = new Audio('https://krisna.hu/bhagavad-gita/BG_1_00.mp3'),    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    this.audio.addEventListener('timeupdate', this.playback)
  },
  methods: {
    play() {
      if (this.playing) {
        this.playing = false
        this.audio.pause()
        return
      }
      this.playing = true
      this.audio.play()
    },
    playback(event) {
      const {currentTime, duration} = event.path[0]
      this.currentTimePercent = currentTime / duration * 100
    }
  },
};
</script>

<style scoped lang="scss">
header {
  height: 200px;
  background-color: #094d92;
}

svg {
  color: #483a1d;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

#icon {
  width: 45vw;
  height: 45vw;
  margin: 1.5rem auto 0 auto;

  svg.svg-inline--fa.fa-w-18 {
    width: 45vw;
    height: 45vw;
    color: #9c885c;
  }
  &.playing svg.svg-inline--fa.fa-w-18 {
    animation: pulse 700ms ease-in-out infinite alternate;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }
}

.middle-button {
  width: 17vw;
  height: 17vw;
  margin: 1.5rem;
}

h5 {
  margin: 0;
  text-align: center;
}
h6 {
  margin: 0;
  background-color: #483a1f;
  height: 0.25rem;
}
</style>