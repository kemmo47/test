<template>
    <div class="text-lg-start my-3">
        <button class="btn btn-primary mx-2" v-on:click="this.$store.dispatch('SetShowTodos','all_todos')">All Todos</button>
        <button class="btn btn-primary mx-2" v-on:click="this.$store.dispatch('SetShowTodos','all_done_todos')">List Done Todos</button>
        <button class="btn btn-primary mx-2" v-on:click="this.$store.dispatch('SetShowTodos','all_slacking_todos')">List Slacking Todos</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>