<template>
  <div>
    <AppHeader
      title="Bhagavad-gita"
      subtitle="hangoskönyv"
      :chapter="current.chapter + '. fejezet'"
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

      <h5>{{ text }}</h5>
      <h6 :style="`width: ${trackPosition}%`"></h6>
    </main>
  </div>
</template>

<script>
// TODO add methods for previous and next icons of the remote #16
// TODO let the user choose a chapter #17
export default {
  transition: 'take-apart',
  data() {
    return {
      audio: null,
      bg: {
        texts: [
          [0, '16-18', '21-22', '37-38', 46],
          [0, '42-43', 72],
        ],
      },
      current: { chapter: 1, text: 0 },
      trackPosition: 0,
      link: 'https://krisna.hu/bhagavad-gita/',
      playing: false,
      text: null,
    }
  },
  created() {
    // TODO localStorage is not existing on server side, so it will fail #18
    if (localStorage.getItem('KrisnaNet.currentChapter')) {
      this.current.chapter = localStorage.getItem('KrisnaNet.currentChapter')
      this.current.text = localStorage.getItem('KrisnaNet.currentText')
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    // TODO Audio not exist at server side, so it will fail #19
    this.audio = new Audio(
      `${this.link}BG_${
        this.current.chapter
      }_${this.current.text.toString().padStart(2, 0)}.mp3`
    )
    this.audio.addEventListener('timeupdate', this.calculatetrackPosition)
    this.audio.addEventListener('ended', this.playNext)
    this.setText()
  },
  methods: {
    calculatetrackPosition(event) {
      const { currentTime, duration } = event.path[0]
      this.trackPosition = (currentTime / duration) * 100
    },
    play() {
      if (this.playing) {
        this.playing = false
        this.audio.pause()
        return
      }
      this.startPlay()
    },
    playNext() {
      // TODO check if the next is a special number #20
      // TODO is the current text is the last one in the chapter #21
      localStorage.setItem('KrisnaNet.currentChapter', this.current.chapter)
      localStorage.setItem('KrisnaNet.currentText', this.current.text)
      this.current.text++
      this.audio.src = `${this.link}BG_${
        this.current.chapter
      }_${this.current.text.toString().padStart(2, 0)}.mp3`
      this.startPlay()
    },
    setText() {
      this.text = this.current.text ? `${this.current.text}. vers` : 'bevezetés'
    },
    startPlay() {
      this.playing = true
      this.audio.play()
      this.setText()
    },
  },
}
</script>

<style scoped lang="scss">
header {
  height: $header-open-height;
  background-color: $block-two;
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
  font-weight: 500;
}
h6 {
  margin: 0;
  background-color: $primary;
  height: 0.25rem;
}
.home-leave-to {
  header {
    background-color: $primary;
    height: $header-closed-height;
 }
}

</style>