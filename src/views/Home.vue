<template>
  <div class="home">
    home
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { users } from '../assets/users'
export default {
  name: 'Home',
  setup() {
    // const state = reactive({
    //   user: users
    // })

    onMounted(() => {
      console.log(users[0].id)
    })
  }
}
</script>
