<template>
    <div class="header">
        <ul class="list-group">
            <router-link to="/" class="text-decoration-none">
                <li class="list-group-item">Home<span v-if="this.$store.state.auth.checkLogin">: {{this.$store.state.oldtodos.length}}</span></li>
            </router-link>
            <router-link to="/todos" class="text-decoration-none">
                <li class="list-group-item">Todos</li>
            </router-link>

            <li class="list-group-item btn btn-default" 
                v-if="this.$store.state.auth.checkLogin"
                v-on:click="this.$store.commit('TOGGLE_AUTH_LOGOUT')" >
                Log Out
            </li>
            <li class="list-group-item btn btn-info" 
                v-else
                v-on:click="this.$store.commit('TOGGLE_AUTH_LOGIN')">
                Log In
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'comp_header',

}
</script>

<style>

</style>