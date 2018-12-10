
import { triviaService } from '../services/TriviaService.js';


//exportovali smo store i naveli smo state{}
export const triviaStore = {
    state: {
        randomTrivies: [],
    },

    actions: {
        async randomTrivies({ commit }) {
            try {
                // console.log('dsfs')
                const response = await triviaService.getRandomTrivies();
                commit('TRIVIES', response.data); //mora response.data
            } catch(error) {
                console.log(error);
            }
        }
    },

    mutations: {
        TRIVIES(state, trivia) {
            state.randomTrivies = trivia;
        }
    },

    getters: {
        getTrivies: state => state.randomTrivies,
    },
};
