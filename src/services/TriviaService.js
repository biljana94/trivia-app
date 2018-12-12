import axios from 'axios';


class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/api/';
    }

    getRandomTrivies() {
        // console.log('fdsfds')
        return axios.get('random/', { params: { count:30 } })
            .then((response) => response.data); //dovlacimo 30 random trivia
    }

    getTriviaCategories() {
        // console.log('lklk')
        return axios.get('categories/', { params: { count:10 } })
            .then(response => response.data);
    }

    getTriviaByCategory({ id }) {
        return axios.get('category/', { params: { id } })
            .then(response => response.data.clues);
    }
}


export const triviaService = new TriviaService();
