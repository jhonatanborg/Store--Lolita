import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const user = {
  namespaced: true,
  state: () => ({
    login: {
      open: false,
      step: 1,
    },
    menuMobile: false,
    user: null,
  }),

  getters: {},
  mutations: {
    setUser(state, data) {
      state.user = data;
      console.log("estado", state);
    },

    ...mutationsGlobal,
  },
  actions: { ...actionsGlobal },
};

export default user;
