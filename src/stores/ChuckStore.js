//importovali smo servis odakle cemo da pozivamo metode koje nam trebaju
import { chuckService } from '../services/ChuckService.js';


//exportovali smo store i naveli smo state{} u kojem cemo pisati akcije
export const chuckStore = {
    state: {
        joke: '',
    },

    actions: {
        //asinhrona akcija
        //pozivamo metodu iz servisa i pisemo promise
        async joke({ commit }) {
            // console.log('bdjb')
            try {
                const response = await chuckService.getRandomJoke();
                commit('JOKE', response);
            } catch(error) {
                console.log(error);
            }
        }
    },

    mutations: {
        //preko mutacije menjamo akciju
        JOKE(state, joke) {
            state.joke = joke;
        }
    },

    getters: {
        randomJoke: state => state.joke,
    },
};
