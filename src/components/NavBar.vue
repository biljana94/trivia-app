<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" :to="{ name: 'trivia-app' }">
            Trivia App
        </router-link>
        <router-link class="navbar-brand" :to="{ name: 'chuck-joke' }">
            Chuck Joke
        </router-link>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
/* .navbar {
    margin: 0 1rem;
} */
</style>
