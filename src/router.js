import Vue from "vue";
import Router from "vue-router";
import Home from "./components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dOne",
      name: "iGallery",
      component: ()=>import('./views/iGallery.vue')
    },
    {
      path: "/dTwo",
      name: "weatherJournal",
      component: ()=> import('./views/weatherJournal.vue')
    },
    {
      path: "/dThree",
      name: "posterMaker",
      component: ()=> import('./views/posterMaker.vue')
    },
    {
      path: "/dFour",
      name: "interactionAnimation",
      component: ()=> import('./views/interactionAnimation.vue')
    },
  
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
