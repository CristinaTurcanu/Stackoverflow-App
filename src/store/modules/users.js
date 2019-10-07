import { dataService } from "../../shared/data.service";
import { GET_USERS } from "../types";

export default {
  namespaced: true,
  state: {
    users: []
  },
  actions: {
    async getUsersAction ({ commit }) {
      const users = await dataService.getUsers();
      commit(GET_USERS, users);
    }
  },
  getters: {
    getUserById: state => id => state.users.find(user => user.id === id),
    getUsers: state => state.users
  },
  mutations: {
    [GET_USERS] (state, users) {
      state.users = users;
    }
  }
};
