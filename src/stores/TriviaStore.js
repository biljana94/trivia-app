
import { triviaService } from '../services/TriviaService.js';


//exportovali smo store i naveli smo state{}
export const triviaStore = {
    state: {
        randomTrivies: [],
        categories: [],
    },

    actions: {
        async randomTrivies({ commit }) {
            try {
                // console.log('dsfs')
                const response = await triviaService.getRandomTrivies();
                commit('SET_TRIVIA', response); //mora response.data
            } catch(error) {
                console.log(error);
            }
        },

        async getCategories({ commit }) {
            try {
                const response = await triviaService.getTriviaCategories();
                commit('SET_TRIVIA_CATEGORIES', response);
            } catch(error) {
                console.log(error);
            }
        },

        async triviaByCategory({ commit }, category) {
            const response = await triviaService.getTriviaByCategory(category);
            commit('SET_TRIVIA', response);
        },
    },

    mutations: {
        SET_TRIVIA(state, trivia) {
            state.randomTrivies = trivia;
        },

        SET_TRIVIA_CATEGORIES(state, category) {
            state.categories = category;
        },
    },

    getters: {
        getTrivies: state => state.randomTrivies,
        getTriviaCategories: state => state.categories,
    },
};
