import { dataService } from "../../shared/data.service";
import { GET_TAGS } from "../types";

export default {
  namespaced: true,
  state: {
    tags: []
  },
  actions: {
    async getTagsAction({ commit }, params) {
      const tags = await dataService.getTags(params);
      commit(GET_TAGS, tags);
    }
  },
  getters: {
    getTags: state => state.tags
  },
  mutations: {
    [GET_TAGS](state, tags) {
      state.tags = tags;
    }
  }
};
