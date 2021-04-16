<template>
  <div>
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
  transition: 'quote',
  data() {
    return {
      today: new Date().toLocaleDateString('hu-HU', {
        month: 'long',
        day: 'numeric',
      }),
    };
  },
  // TODO the quote should be get from the server randomly daily #6
};
</script>

<style scoped>
header {
  height: 200px;
  background-color: #5ab1bb;
}
p {
  font-size: 1.7rem;
  line-height: 2.7rem;
  margin: 0;
}
</style>
