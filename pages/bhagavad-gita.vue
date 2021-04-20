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
          @click="pause"
          v-show="playing"
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon="forward"></FontAwesomeIcon>
      </section>

      <h6><span :style="`width: ${trackPosition}%`"> </span></h6>
      <h5>
        <select v-model="current.chapter" @change="current.textNumber = 0">
          <option
            v-for="(chapter, index) in bg"
            :key="index"
            :value="index + 1"
          >
            {{ index + 1 }}. fejezet
          </option>
        </select>
        <span>{{ text }}</span>
      </h5>
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
      bg: [
        { 16: 18, 21: 22, 37: 38, 46: 'last' },
        { 42: 43, 72: 'last' },
      ],
      current: { chapter: 1, textNumber: 0 },
      trackPosition: 0,
      link: 'https://krisna.hu/bhagavad-gita/',
      playing: false,
    }
  },
  computed: {
    text: function () {
      return this.current.textNumber
        ? `${this.current.textNumber}. vers`
        : 'bevezetés'
    },
  },
  created() {
    if (process.client && localStorage.getItem('KrisnaNet.currentChapter')) {
      this.current.chapter =
        localStorage.getItem('KrisnaNet.currentChapter') ?? 1
      this.current.textNumber =
        localStorage.getItem('KrisnaNet.currentTextNumber') ?? 0
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
    if (process.client) {
      this.audio = new Audio(
        `${this.link}BG_${
          this.current.chapter
        }_${this.current.textNumber.toString().padStart(2, 0)}.mp3`
      )
      this.audio.addEventListener('timeupdate', this.calculatetrackPosition)
      this.audio.addEventListener('ended', this.playNext)
    }
  },
  methods: {
    calculatetrackPosition(event) {
      const { currentTime, duration } = event.path[0]
      this.trackPosition = (currentTime / duration) * 100
    },
    getNext() {
      //handle speacial text numbers
      let nextNumber

      // if the current is a speacial one
      if (isNaN(this.current.textNumber)) {
        nextNumber = parseInt(this.current.textNumber.split('-')[1]) + 1
      } else {
        nextNumber = parseInt(this.current.textNumber) + 1
      }

      if (
        Object.keys(this.bg[this.current.chapter - 1]).indexOf(
          nextNumber.toString()
        ) != -1
      ) {
        return nextNumber + '-' + this.bg[this.current.chapter - 1][nextNumber]
      }
      return nextNumber
    },
    play() {
      this.playing = true
      this.audio.play()
    },
    pause() {
      this.playing = false
      this.audio.pause()
    },
    playNext() {
      // TODO is the current text is the last one in the chapter #21
      if (process.client) {
        localStorage.setItem('KrisnaNet.currentChapter', this.current.chapter)
        localStorage.setItem(
          'KrisnaNet.currentTextNumber',
          this.current.textNumber
        )
      }
      this.current.textNumber = this.getNext()
      this.audio.src = `${this.link}BG_${
        this.current.chapter
      }_${this.current.textNumber.toString().padStart(2, 0)}.mp3`
      this.play()
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
  margin: 1rem 0 0 0;
  text-align: center;
  font-weight: 500;
}
h6 {
  position: relative;
  margin: 0;
  height: 0.25rem;
  background-color: #9c885c;

  span {
    position: absolute;
    display: inline-block;
    height: 100%;
    background-color: $primary;
  }
}
.home-leave-to {
  header {
    background-color: $primary;
    height: $header-closed-height;
  }
}
</style>