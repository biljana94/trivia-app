import axios from 'axios';


class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/api/';
    }

    getRandomTrivies() {
        // console.log('fdsfds')
        return axios.get('random/', { params: { count:30 } }); //dovlacimo 30 random trivia
    }
}


export const triviaService = new TriviaService();
