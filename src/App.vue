<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">
          Tweeetter
        </div>
      </router-link>
      <div class="navigation__user" v-if="user">
        {{ user.username }}
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'App',
  setup() {
    const store = useStore();
    const user = computed(() =>{
       return store.state.user
    })


    return {
      user
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: #072F5F;
    color: white;
    .navigation__logo {
      color: white;
      font-weight: bold;
      font-size: 24px;
    }
    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>
