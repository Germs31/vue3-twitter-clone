<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">
          Tweeetter
        </div>
      </router-link>
      <div class="navigation__user" v-if="user">
        {{ state.user.username }}
      </div>
    </nav>
    <router-view/>

    <UserProfile />
  </div>
</template>

<script>
import { reactive } from 'vue'
import UserProfile from '@/components/UserProfile'
export default {
  name: 'App',
  components: { UserProfile },
  setup() {
    const state = reactive ({
      user: {
        username: '_Germs31'
      }
    })

    return {
      state
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
      font-weight: bold;
      font-size: 24px;
    }
    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>
