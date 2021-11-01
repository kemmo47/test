<template>
    <div class="container">
        <div class="text-center">
            <div class="todos" v-if="$store.state.auth.checkLogin">
                <h2>My Todos</h2>
                <div class="input_todos my-4">
                    <InputTodo />
                </div>
                <div class="all_todos">
                    <ButonChangeTodos />
                    <table class="table">
                        <thead>
                            <tr>
                                <th width="50px"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col" width="150px"></th>
                            </tr>
                        </thead>
                        <ShowTodos />
                    </table>
                    <ActionTodos />
                </div>
            </div>
            <div class="text-center text-danger" v-else>Not Login</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'comp_todos',
    components: {
        'ShowTodos': require('./share/todos/ShowTodos.vue').default,
        'ActionTodos': require('./share/todos/ActionTodos.vue').default,
        'ButonChangeTodos': require('./share/todos/ButtonChange.vue').default,
        'InputTodo': require('./share/todos/AddTodo.vue').default,
    }
}
</script>

<style>

</style>