<template>
  <div class="user-profile">
      <div class="user-profile__user-panel">
          <h1 class="user-profile__username">@{{user.username}}</h1>
          <div class="user-profile__follower-count">
              <strong>Followers:</strong> {{followers}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'Germs31',
        firstName: 'German',
        lastName: 'Nunez',
        email: 'german@german.com',
        isAdmin: true
      },
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount){
      if(oldFollowerCount < newFollowerCount){
        console.log(`${this.user.username} has gained a follower`)
      }
    }
  },
  computed: {
    fullName(){
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUser() {
      this.followers = this.followers + 1
    }
  },
  mounted() {
    this.followUser();
  }
}
</script>

<style>
    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        padding: 50px 5%;
    }

    .user-profile__user-panel{
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
    }

    h1 {
        margin: 0
    }
</style>