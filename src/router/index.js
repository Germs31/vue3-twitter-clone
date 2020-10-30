import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { users } from '../assets/users'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// runs before everypage. good for protecting pages

router.beforeEach(async (to, from, next) => {
  // VUEx
  const user = store.state.user
  if(!user){
    //dispatch, what you use to call actions
    await store.dispatch( 'setUser', users[0])
  }
  // admin set to true jsut to test protecting routes.
  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  // next redirects you
  if(requiresAdmin && !isAdmin) next({name: 'Home'})
  else next();
})


export default router
