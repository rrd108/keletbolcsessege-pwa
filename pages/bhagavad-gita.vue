<template>
  <div v-touch:swipe="swipeHandler">
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
        <FontAwesomeIcon icon="backward" @click="prev"></FontAwesomeIcon>
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
        <FontAwesomeIcon icon="forward" @click="next"></FontAwesomeIcon>
      </section>

      <h6><span :style="`width: ${trackPosition}%`"> </span></h6>
      <div id="selector">
        <select v-model="current.chapter" @change="current.textNumber = 0">
          <option
            v-for="(chapter, index) in bg"
            :key="index"
            :value="index + 1"
          >
            {{ index + 1 }}. fejezet
          </option>
        </select>
        <select v-model="current.textNumber">
          <option value="0">bevezetés</option>
          <option
            v-for="verse in bg[current.chapter - 1].last"
            :key="verse"
            :value="verse"
          >
            {{ verse }}. vers
          </option>
        </select>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  transition: 'take-apart',
  data() {
    return {
      audio: null,
      bg: [
        { 16: 18, 21: 22, 37: 38, last: 46 },
        { 42: 43, last: 72 },
      ],
      current: { chapter: 1, textNumber: 0 },
      trackPosition: 0,
      link: 'https://krisna.hu/bhagavad-gita/',
      playing: false,
    }
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
      // TODO is the current text is the last one in the chapter #21
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
    next() {
      this.current.textNumber = this.getNext()
    },
    play() {
      this.setAudioSrc()
      this.playing = true
      this.audio.play()
    },
    pause() {
      this.playing = false
      this.audio.pause()
    },
    playNext() {
      if (process.client) {
        localStorage.setItem('KrisnaNet.currentChapter', this.current.chapter)
        localStorage.setItem(
          'KrisnaNet.currentTextNumber',
          this.current.textNumber
        )
      }
      this.current.textNumber = this.getNext()
      this.setAudioSrc()
      this.play()
    },
    prev() {
      this.current.textNumber = this.current.textNumber
        ? this.current.textNumber - 1
        : 0
    },
    setAudioSrc() {
      this.audio.src = `${this.link}BG_${
        this.current.chapter
      }_${this.current.textNumber.toString().padStart(2, 0)}.mp3`
    },
    swipeHandler(direction) {
      if (direction == 'right') {
        this.$router.push({ path: '/quote' })
      }
      if (direction == 'left') {
        this.$router.push({ path: '/videos' })
      }
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

#selector {
  display: flex;
  margin: 1em;
  justify-content: space-around;

  select {
    background-color: $secondary;
    font-size: 1.5rem;
    border: none;
    color: $primary;
  }
}

.home-leave-to {
  header {
    background-color: $primary;
    height: $header-closed-height;
  }
}
</style>