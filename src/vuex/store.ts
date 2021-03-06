import { provide, inject } from 'vue';
import { createStore, Store } from 'vuex';
import userInfo from '../data/users.json';
import axios from 'axios'

interface RootState {
  token: string;
  cardList: any;
  userName: string;
  userMoney: number;
}

const initalState: RootState = {
  token: '',
  cardList: null,
  userName: userInfo.user_name,
  userMoney: userInfo.money
};

export const store = createStore({
  state: initalState,
  mutations: { // => 동기 과정?
    SET_MONEY(state, money) {
      state.userMoney = money;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_CARDLIST(state, cardList) {
      state.cardList = cardList;
    },
  },
  actions: { // => 비동기 과정!
    INCREASE({ state, commit }) {
      commit('SET_MONEY', state.userMoney + 1);
    },
    DECREASE({ state, commit }) {
      commit('SET_MONEY', state.userMoney - 1);
    },
    LOADLIST({ state, commit }) {
      return axios.get('https://api.angelleague.io/v1/clubdeals', { headers: { 'Authorization': state.token } })
      .then((response) => {
          let res = response.data;
          res = res.slice(res.length-5,res.length);
          commit('SET_CARDLIST', res);
      })
    },
  },
  getters : {
    cardList(state) {
      return state.cardList;
    },
    token(state) {
      return state.token;
    }
  }
});

// Provide 구분 값
const StoreSymbol = Symbol();

// 저장소 제공 헬퍼 함수
export const provideStore = () => {
  provide(StoreSymbol, store);
};

// 저장소 주입 헬퍼 함수
export const useStore = () => {
  const store = inject<Store<RootState>>(StoreSymbol);
  if (!store) {
    throw new Error('No store provided');
  }
  return store;
};

export default store;