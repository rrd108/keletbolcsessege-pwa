<template>
  <div>
    <AppHeader title="Sivarama Swami" subtitle="vlog" chapter="Videók" />
    <main>
      <section
        v-for="video in videos.items"
        :key="video.snippet.resourceId.videoId"
      >
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
  // TODO add pager #22
  // TODO start video automatically #23
  async asyncData({ params, $axios }) {
    const apiKey = process.env.KRISNANET_GOOGLE_APIKEY
    const videos = await $axios.$get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PL0drUyRdPzXNNqBbLYC4RrWDvY7QhMcIJ&key=${apiKey}`
    )
    return { videos, selectedVideoId: null }
  },
  methods: {
    getVideoTitle(title) {
      return title.substr(0, title.length - 17)
    },
  },
}
</script>

<style scoped lang="scss">
header {
  height: 200px;
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
</style>