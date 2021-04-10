<template>
  <div>
    <NuxtLink to="/home">Gauranga</NuxtLink>
  </div>
</template>

<script>
export default {
  transition: "slideUp",
  head: {
    style: [
      { cssText: 'header { display: none}', type: 'text/css' }
    ]
  }
}
</script>

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
    color: #ede0c5;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    margin-bottom: 6rem;
  }
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: transform 0.5s;
}
.slideUp-enter,
.slideUp-leave-active {
  transform: translateY(-100rem);
}
</style>
