<template>
  <div class="user-profile">

    <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{user.username}}</h1>
        <div class="user-profile__admin" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
            <strong>Followers:</strong> {{followers}}
        </div>
    </div>

    <div class="user-profile__tweets-wrapper">
        <TweetItem 
            v-for="tweet in user.tweets" 
            :key="tweet.id" 
            :username="user.username"
            :tweet="tweet"/>
    </div>

  </div>
</template>

<script>
import TweetItem from '@/components/TweetItem'
export default {
  name: 'App',
  components: {TweetItem},
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'Germs31',
        firstName: 'German',
        lastName: 'Nunez',
        email: 'german@german.com',
        isAdmin: true,
        tweets: [
            {
                id: 1,
                content: 'This is a twitter clone'
            },
            {
                id: 2,
                content: 'Understanding vue3 better'
            },
        ]
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

    .user-profile__admin{
        background: lightblue;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding: 0 10px;
    }

    .user-profile__tweets-wrapper {
        display: grid;
        grid-gap: 10px;
    }
</style>