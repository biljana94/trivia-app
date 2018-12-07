import Chuck from 'chucknorris-io';

class ChuckService {
    constructor() {
        this.client = new Chuck();
    }

    //pravimo fnc getRandomJoke() u servisu
    //ovu metodu prosledjujemo store-u(ChuckStore.js) koja ce kroz akciju i mutaciju da prikaze u Chuck.vue komponenti ono sto nam treba
    getRandomJoke() {
        //u fnc pozivamo nad klijentom fnc koja je ugradjena this.client.getRandomJoke() u Chuck koji smo importovali
        return this.client.getRandomJoke();
    }
}

export const chuckService = new ChuckService();
