<template>
    <div class="mt-4 mb-5 group_btn_todos">
        <button class="btn btn-info" v-on:click="this.$store.dispatch('CheckAllTodos')">Check All</button>
        <button class="btn btn-dark" v-on:click="this.$store.dispatch('UnCheckAllTodos')">UnCheck All</button>
        <button class="btn btn-success" v-on:click="this.$store.dispatch('DoneAllTodos')">Done All</button>
        <button class="btn btn-danger" v-on:click="DeleteAllTodos(this.$store.state.todos)">Del All</button>
    </div>
</template> 

<script>
export default {
    name: 'ActionTodos',
    data(){
        return{
            params: []
        }
    },
    methods:{
        DeleteAllTodos(todos){
            this.params = todos.filter(todo => todo.todo_check === 1)
            if(this.params.length > 0){
                this.$store.dispatch('DelAllTodos', this.params)
            }else{
                alert('Check công việc trước khi xóa')
            }
        }
    }
}
</script>

<style>

</style>