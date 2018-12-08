//importovali smo servis odakle cemo da pozivamo metode koje nam trebaju
import { chuckService } from '../services/ChuckService.js';


//exportovali smo store i naveli smo state{} u kojem cemo pisati akcije
export const chuckStore = {
    state: {
        joke: '',
        categories: [],
    },

    actions: {
        //asinhrona akcija
        //pozivamo metodu iz servisa i pisemo promise
        async joke({ commit }, categ) {
            // console.log('bdjb')
            try {
                const response = await chuckService.getRandomJoke(categ);
                commit('JOKE', response.value); //u commitu pisemo mutaciju i response
            } catch(error) {
                console.log(error);
            }
        },


        async jokesCategories({ commit }) {
            try {
                const response = await chuckService.getJokeCategories();
                commit('JOKES_CATEGORIES', response);
            } catch(error) {
                console.log(error);
            }
        }
    },

    mutations: {
        //preko mutacije menjamo akciju
        JOKE(state, joke) {
            state.joke = joke;
        },

        JOKES_CATEGORIES(state, category) {
            state.categories = category;
        }
    },

    getters: {
        randomJoke: state => state.joke,
        categories: state => state.categories,

    },
};
