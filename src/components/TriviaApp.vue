<template>
    <div class="default">
        
        <div class="card">
            <div class="card-header">
                Trivia Question and Answer
            </div>
            <div class="card-body" v-for="trivia in getTrivies" :key="trivia.id">
                <blockquote class="blockquote mb-0">
                <p>{{ trivia.question }}?</p>
                <footer class="blockquote-footer">Answer: {{ trivia.answer }}</footer>
                </blockquote>
            </div>
        </div>

    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
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
    },

    //u computed se mapiraju getteri(da ih pozivamo kao properti)
    computed: {
        ...mapGetters([
            'getTrivies',
        ]),
    },
}
</script>
