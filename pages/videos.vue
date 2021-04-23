<template>
  <div v-touch:swipe="swipeHandler">
    <AppHeader
      title="Videók"
      subtitle="Sivarama Swami, Krisna.hu"
      chapter="Legfrisebb"
    />
    <main>
      <section v-for="video in videos" :key="video.snippet.resourceId.videoId">
        <img
          v-if="selectedVideoId != video.snippet.resourceId.videoId"
          :src="video.snippet.thumbnails.medium.url"
          :alt="getVideoTitle(video.snippet.title)"
          @click="selectedVideoId = video.snippet.resourceId.videoId"
        />
        <youtube
          v-if="selectedVideoId == video.snippet.resourceId.videoId"
          :video-id="video.snippet.resourceId.videoId"
          player-width="100%"
          player-height="auto"
          :player-vars="{ autoplay: 1 }"
        ></youtube>
        <h4>{{ getVideoTitle(video.snippet.title) }}</h4>
        <h5>{{ video.snippet.publishedAt.substr(0, 10) }}</h5>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  transition: 'take-apart',
  // TODO add pager #22
  // TODO start video automatically #23
  async asyncData({ $axios }) {
    const playlists = [
      /*SRS/vlog*/ 'PL0drUyRdPzXNNqBbLYC4RrWDvY7QhMcIJ',
      /*krisnahu/krisnaNews*/ 'PLR1elb3e5EBlgvOhgCsfoMRf3BgFu7NOx',
    ]
    const results = 5
    const apiKey = process.env.KRISNANET_GOOGLE_APIKEY
    const videoLists = await Promise.all(
      playlists.map((playlist) =>
        $axios.$get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${results}&playlistId=${playlist}&key=${apiKey}`
        )
      )
    )
    const videos = [
      ...videoLists[0].items,
      ...videoLists[1].items,
    ].sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1))
    return { videos, selectedVideoId: null }
  },
  methods: {
    getVideoTitle(title) {
      return title.substr(0, title.length - 17)
    },
    swipeHandler(direction) {
      if (direction == 'right') {
        this.$router.push({ path: '/bhagavad-gita' })
      }
    },
  },
}
</script>

<style scoped lang="scss">
header {
  height: $header-open-height;
  background-color: $block-three;
}
main {
  section {
    margin: 2rem 0;

    h4,
    h5 {
      margin: 0;
      font-weight: 500;
      text-align: center;
      font-size: 0.85rem;
    }
  }
}
.home-leave-to {
  header {
    background-color: $primary;
    height: $header-closed-height;
  }
}
</style>