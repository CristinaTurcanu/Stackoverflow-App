import { dataService } from "../../shared/data.service";
import { GET_QUESTIONS, ADD_QUESTION } from "../types";

export default {
  namespaced: true,
  state: {
    questions: []
  },
  actions: {
    async getQuestionsAction({ commit }, params) {
      const questions = await dataService.getQuestions(params);
      commit(GET_QUESTIONS, questions);
    },
    async addQuestionAction({ commit }, params) {
      const newQuestion = await dataService.addQuestion(params);
      commit(ADD_QUESTION, newQuestion);
    }
  },
  getters: {
    getQuestionById: state => id => state.questions.find(q => q.id === id),
    getQuestions: state => state.questions
  },
  mutations: {
    [GET_QUESTIONS](state, questions) {
      state.questions = questions;
    },
    [ADD_QUESTION](state, question) {
      state.questions.push(question);
    }
  }
};
