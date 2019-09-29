import Vue from "vue";
import Vuex from "vuex";

import usersModule from "./modules/users";
import questionsModule from "./modules/questions";
import tagsModule from "./modules/tags";
import answersModule from "./modules/answers";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: usersModule,
    questions: questionsModule,
    tags: tagsModule,
    answers: answersModule
  }
});
