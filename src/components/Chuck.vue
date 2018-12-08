<template>
    <div class="default">


        <div class="card text-center">

            <div class="card-header">
                Chuck Norris Jokes
            </div>

            <div class="card-body">
                <img src="https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2017/03/chuck-norris-e1496034814125.jpg"/>
                <h5 class="card-title">{{ randomJoke }}</h5>
                <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <p>More Jokes...</p>
                <div class="row justify-content-md-center">
                    <!--joke() - akcija iz store-a; jokeCategory - u data(){return{}} smo napisali prazan string, i sluzi nam i kao v-model-->
                    <form @submit.prevent="joke(jokeCategory)">
                        <div class="form-group">
                            <label>Select Joke Category</label>
                            <!-- <input v-model="jokeCategory" type="text" class="form-control" placeholder="Enter category joke"> -->
                            <select v-model="jokeCategory" class="form-control">
                                <!--getter nam vraca 'categories' i mi uzimamo 'category' i ispisujemo je-->
                                <option v-for="category in categories" :key="category.id">{{ category }}</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-outline-dark">Get New Joke</button>
                    </form>
                </div>
            </div>

            <div class="card-footer text-muted">
                Chuck bless you!
            </div>

        </div>

    </div>
</template>

<script>

//mapirala sam akcije i gettere da ne bi morala da ih vracam svaku posebno kroz computed properti i metode
//malo manje koda i vremena
//akcije pozivam kao metode, a getteri mi sluze za ispis kao properti(zato se i nalaze mapirani u computed-u)
import { mapActions, mapGetters } from 'vuex';

export default {
    //dispatch-ovali smo fnc iz store-a(ChuckStore.js)
    // created() {
    //     this.$store.dispatch('jokes');
    // },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // console.log('sdfsdf')
            vm.$store.dispatch('joke');
            // vm.joke;
            vm.$store.dispatch('jokesCategories');
        })
    },

    data() {
        return {
            jokeCategory: '',
        }
    },

    computed: {
        //preko computed propertija smo dovukli getter iz ChuckStore.js i ispisali smo njegov value
        //i onda ispisujemo ovaj computed properti
        // randJoke() {
        //     return this.$store.getters.randomJoke;
        // }
        ...mapGetters([
            'randomJoke',
            'categories',
        ]),


    },

    methods: {
        ...mapActions([
            'joke',
            'jokesCategories',
        ]),
    },

    
}
</script>

<style>
.default .card {
    margin: 1rem 0;
}

.default .card .card-body .card-title {
    margin: 2rem 0;
    padding: 0.5rem;
    border: 1px solid #343a40;
    border-radius: 0.3rem;
}

.default .card .card-body p {
    font-size: 25px;
}
</style>
