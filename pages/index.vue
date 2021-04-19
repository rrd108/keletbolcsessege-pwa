<template>
  <div>
    <NuxtLink to="/home">Gauranga</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  background-image: url('~/assets/background-logo.png');
  background-size: 35rem;
  background-repeat: no-repeat;
  background-position: center center;

  a {
    background-color: #483a1d;
    color: $secondary;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    margin-bottom: 6rem;
  }
}
</style>
