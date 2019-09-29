import { dataService } from "../../shared/data.service";
import { GET_ANSWERS } from "../types";

export default {
  namespaced: true,
  state: {
    answers: []
  },
  actions: {
    async getAnswersAction({ commit }) {
      const answers = await dataService.getAnswers();
      commit(GET_ANSWERS, answers);
    }
  },
  getters: {
    getAnswersByQuestionId: state => id =>
      state.answers.filter(a => a.question_id === id),
    getAnswers: state => state.answers
  },
  mutations: {
    [GET_ANSWERS](state, answers) {
      state.answers = answers;
    }
  }
};
