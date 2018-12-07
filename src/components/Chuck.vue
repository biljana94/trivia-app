<template>
    <div class="alert alert-info" role="alert">
        {{ randJoke }}
    </div>
</template>

<script>
export default {
    //dispatch-ovali smo fnc iz store-a(ChuckStore.js)
    // created() {
    //     this.$store.dispatch('jokes');
    // },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // console.log('sdfsdf')
            vm.$store.dispatch('joke');
        })
    },

    computed: {
        //preko computed propertija smo dovukli getter iz ChuckStore.js i ispisali smo njegov value
        //i onda ispisujemo ovaj computed properti
        randJoke() {
            return this.$store.getters.randomJoke.value;
        }
    },
}
</script>

<style>
.alert {
    margin: 1rem 0;
}
</style>
