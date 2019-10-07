import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import InProgress from "../views/InProgress";
import UserDetails from "../views/UserDetails";
import QuestionDetails from "../views/QuestionDetails";
import QuestionForm from "../views/QuestionForm";
import Tags from "../views/Tags";
import SignUp from "../views/SignUp";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: InProgress
    },
    {
      path: "/users",
      name: "users",
      component: () =>
        import(/* webpackChunkName: "users" */ "../views/Users.vue")
    },
    {
      path: "/user/:id",
      name: "user",
      params: ["id"],
      props: true,
      component: UserDetails
    },
    {
      path: "/questions",
      name: "questions",
      component: () =>
        import(/* webpackChunkName: "questions" */ "../views/Questions.vue")
    },
    {
      path: "/question/:id",
      name: "question",
      params: ["id"],
      props: true,
      component: QuestionDetails
    },
    {
      path: "/questions/new",
      name: "questionForm",
      component: QuestionForm
    },
    {
      path: "/tags",
      name: "tags",
      component: Tags
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    }
  ]
});
