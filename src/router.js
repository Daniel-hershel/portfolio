import Vue from "vue";
import Router from "vue-router";
import Home from "./components/HelloWorld.vue";
import DemoOne from "./components/DemoOne.vue";
import DemoTwo from "./components/DemoTwo.vue";
import DemoThree from "./components/DemoThree.vue";
import DemoFour from "./components/DemoFour.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/demoone",
      name: "demoOne",
      component: DemoOne
    },
    {
      path: "/demotwo",
      name: "demoTwo",
      component: DemoTwo
    },
    {
      path: "/demothree",
      name: "demoThree",
      component: DemoThree
    },
    {
      path: "/demofour",
      name: "demoFour",
      component: DemoFour
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