<template>
    <div class="default">
        
        <div class="card">
            <div class="card-header">
                Trivia Questions and Answers
            </div>
            <div class="card-body" v-for="trivia in getTrivies" :key="trivia.id">
                <blockquote class="blockquote mb-0">
                    <p>{{ trivia.question }}?</p>
                    <footer v-show="isTriviaExpanded(trivia)" class="blockquote-footer">Answer: {{ trivia.answer }}</footer>
                    <button @click="toggleTrivia(trivia)" type="button" class="btn btn-outline-dark">Show Answer</button>
                </blockquote>
            </div>
        </div>
{{JSON.stringify(getTrivies)}}
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            expandedTriviaIds: [],
        }
    },
    //
    created() {
        // console.log('dssds')
        this.$store.dispatch('randomTrivies');
    },    

    //u metodu se mapiraju akcije
    methods: {
        ...mapActions([
            'randomTrivies',
        ]),

        //ovo smo pozvali na v-show
        toggleTrivia(trivia) {
            let expandedTriviaIndex = this.expandedTriviaIds.indexOf(trivia.id);
            if (expandedTriviaIndex >= 0) {
                this.expandedTriviaIds.splice(expandedTriviaIndex, 1);
                return;
            }
            this.expandedTriviaIds.push(trivia.id)
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
        ]),
    },
}
</script>
