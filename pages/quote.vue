<template>
  <div>
    <AppHeader title="Napi bölcsesség" />
    <main>
      <p>
        Végezd kötelességed megingathatatlanul, óh, Arjuna, s ne ragaszkodj se a
        sikerhez, se a kudarchoz! Az ilyen kiegyensúlyozottságot hívják yogának.
      </p>
      <cite>Bhagavad-gita 2.48</cite>
    </main>
  </div>
</template>

<script>
export default {
  transition: 'quote'
};
</script>

<style scoped>
header {
  height: 200px;
}
p {
  margin: 0;
  line-height: 3rem;
}
cite {
  color: #431;
  opacity: 0.4;
  font-size: 1.3rem;
}
</style>
