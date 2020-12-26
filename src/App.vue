<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><i class="fi-lightbulb">Ma</i></router-link>
      <router-link to="/starred"><i class="fi-star">Stars</i></router-link>
    </div>
    <router-view/>
    <img src="./assets/KV-logo-final-brown.png">
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:500");
@import url("./assets/foundation-icons.css");

#app {
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
  color: #483A1F;
}

#app img {
  position: absolute;
  right: 2vw;
  bottom: 2vh;
  width: 50%;
  height: auto;
  opacity: 0.3;
}

#nav {
  margin: 0;
  text-align: center;
  border-top: 2vh solid #431;
  font-size: 1.5rem;
}

#nav a {
  font-weight: bold;
  color: #431;
  padding: 1vh;
}

#nav a.router-link-exact-active {
  color: #eda;
  background: #431;
}
i {
  margin-right: 1rem;
}
</style>
