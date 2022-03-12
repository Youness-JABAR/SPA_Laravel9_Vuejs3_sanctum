import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AllPosts from '../views/posts/AllPosts.vue'
import ShowPost from '../views/posts/ShowPost.vue'
import CreatePost from '../views/posts/CreatePost.vue'
import EditPost from '../views/posts/EditPost.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  { 
    path : '/posts', component : AllPosts  
  },
  { 
    path : '/posts/create', component : CreatePost  
  },
  { 
    path : '/posts/:id/edit', component : EditPost, name : 'editPost' 
  },
  { 
    path : '/posts/:id', component : ShowPost 
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
