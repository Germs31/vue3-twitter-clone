<template>
  <div class="user-profile">

    <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{user.username}}</h1>
        <div class="user-profile__admin" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
            <strong>Followers:</strong> {{followers}}
        </div>

        <form class="user-profile__create-tweet" @submit.prevent="createNewTweet">
            <label for="newTweet"><strong>New Tweet</strong></label>
            <textarea id="newTweet" rows="4" v-model="newTweetContent"/>

            <div class="user-profile__create-tweet-type">
                <label for="newTweetType"><strong>Type</strong></label>
                <select id="newTweetType" v-model="selectedTweetType">
                    <option 
                        :value="option.value" 
                        v-for="(option, index) in tweetTypes" 
                        :key="index">

                        {{option.name}}
                    </option>
                </select>
            </div>

            <button>
                Tweet
            </button>
        </form>
    </div>

    <div class="user-profile__tweets-wrapper">
        <TweetItem 
            v-for="tweet in user.tweets" 
            :key="tweet.id" 
            :username="user.username"
            :tweet="tweet"
            @favorite="toggleFavorite"/>
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
      newTweetContent: '',
      selectedTweetType: 'draft',
      tweetTypes:[
          {
              value: 'draft', name: 'Draft'
          },
          {
              value: 'instant', name: 'Instant Tweet'
          }
      ],
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
    },
    toggleFavorite(id){
        console.log(`favorited tweet #${id}`)
    },
    createNewTweet() {
        if(this.newTweetContent && this.selectedTweetType != 'draft'){
            this.user.tweets.unshift({
                id: this.user.tweets.length + 1,
                content: this.newTweetContent
            })

            this.newTweetContent = ''
        }
    }
  },
  mounted() {
    this.followUser();
  }
}
</script>

<style lang="scss" scoped>
    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        padding: 50px 5%;

        .user-profile__user-panel{
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            border: 1px solid #DFE3E8;

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

            .user-profile__create-tweet{
                padding-top: 20px;
                display: flex;
                flex-direction: column;
            }
        }
        
        .user-profile__tweets-wrapper {
            display: grid;
            grid-gap: 10px;
        }
    }





</style>