<template>
    <div class="default">
        
        <div class="card border-dark">
            <div class="card-header border-dark">

                Questions and Answers
                <hr>

                <div class="row justify-content-md-center">
                    <form @submit.prevent="triviaByCategory(triviaCategory)">
                        <div class="form-group">
                            <label>Select Trivies Category</label>
                            <select v-model="triviaCategory" class="form-control">
                                <!--getter nam vraca 'categories' i mi uzimamo 'category' i ispisujemo je-->
                                <option v-for="category in getTriviaCategories" :key="category.id" :value="category">
                                    {{ category.title }}
                                </option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Get New Trivies</button>
                    </form>
                </div>
                
            </div>

            <div class="card-body" v-for="trivia in getTrivies" :key="trivia.id">
                <blockquote class="blockquote mb-0">
                    <p class="text-primary">{{ trivia.question }}?</p>
                    <p v-show="isTriviaExpanded(trivia)">{{ trivia.answer }}</p>
                    <button @click="toggleTrivia(trivia)" type="button" class="btn btn-outline-dark">Show Answer</button>
                </blockquote>
            </div>

        </div>
        <!-- {{JSON.stringify(getTrivies)}} -->
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            expandedTriviaIds: [],
            triviaCategory: {},
        }
    },
    //
    created() {
        // console.log('dssds')
        // this.$store.dispatch('randomTrivies');
        // this.$store.dispatch('triviaCategories');
        this.randomTrivies();
        this.getCategories();
    },    

    //u metodu se mapiraju akcije
    methods: {
        ...mapActions([
            'randomTrivies',
            'getCategories',
            'triviaByCategory',
        ]),

        //ovo smo pozvali na v-show, da li je trivia prikazana ili nije
        toggleTrivia(trivia) {
            //u let stavljamo svaki index od trivia koje prosledjujemo pomocu id; 
            let expandedTriviaIndex = this.expandedTriviaIds.indexOf(trivia.id);
            //ako je index svake trivie >=0
            if (expandedTriviaIndex >= 0) {
                //izbaci jednu triviu iz niza
                this.expandedTriviaIds.splice(expandedTriviaIndex, 1);
                return; //izadji iz fnc
            }
            //u suprotnom dodaj triviu u niz expandedTriviaIds [] koji smo naveli u data(){return{}}
            this.expandedTriviaIds.push(trivia.id);
        },

        //ovo sam pozvala na button
        isTriviaExpanded(trivia) {
            return this.expandedTriviaIds.indexOf(trivia.id) >= 0;
        }
    },

    //u computed se mapiraju getteri(da ih pozivamo kao properti)
    computed: {
        ...mapGetters([
            'getTrivies',
            'getTriviaCategories',
        ]),
    },
}
</script>
