import Vue from "vue";
import VueRouter from "vue-router";

import AuthenticationModule from "../module/authentication/authentication.module.vue";
import RegistrationModule from "../module/registration/registration.module.vue";
import TodoModule from "../module/todo/todo.module.vue";

import FirstSubmodule from "../module/todo/submodule/first/first.submodule.vue";
import SecondSubmodule from "../module/todo/submodule/second/second.submodule.vue";

Vue.use(VueRouter);

let authenticated = false;//Only for a test!

module.exports = new VueRouter({
  routes: [
      {
          path: "/",
          redirect: to => {
              if (authenticated == true) {
                  return "/todo";
              } else {
                  return "/authentication"
              }
          }
      },
      {
          path: "/todo",
          name: "TodoModule",
          component: TodoModule,
          children: [
              { path: "/first", name: "FirstSubmodule", component: FirstSubmodule },
              { path: "/second", name: "SecondSubmodule", component: SecondSubmodule }
          ]
      },
      { path: "/authentication", name: "AuthenticationModule", component: AuthenticationModule },
      { path: "/registration", name: "RegistrationModule", component: RegistrationModule },
      { path: "*", redirect: "/" },
  ]
});
