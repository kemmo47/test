<template>
    <tbody>
        <tr><td colspan="5" class="progress_text" v-bind:class="this.$store.state.classProgress">{{Progress}} %</td></tr>
        <tr v-for="(todo, index) in this.$store.state.todos" v-bind:key="index">
            <td>{{todo.todo_id}}</td>
            <td scope="row">
                <input type="checkbox" class="form-check-input" 
                    v-bind:checked="todo.todo_check === 1"
                    v-on:click="this.$store.dispatch('CheckTodo', index)" >
            </td>
            <td colspan="2" class="text-lg-start" v-bind:class="{ 'todo_active' : todo.todo_complete === 1 }" :id="'edit_todos_'+todo.todo_id">
                <EditTodo v-bind:todo_id="todo.todo_id"
                        v-bind:todo_info="todo.todo_info" 
                        v-bind:todo_complete="todo.todo_complete"
                        v-on:CLOSEEDITTODOS="HandleCloseEdit"
                        v-if="showEdit === todo.todo_id" />
                <span v-else>{{todo.todo_info}}</span>
            </td>
            <td>
                <button class="btn btn-info me-3" v-on:click="EditTodo(todo.todo_id, todo.todo_complete)">Edit</button>
                <button class="btn btn-danger" :disabled="todo.todo_check === 0" v-on:click="DeleteTodo(todo.todo_id, todo.todo_check)">x</button>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'ShowTodos',
    data(){
        return {
            todos: this.$store.dispatch('ListAllTodos'),
            showEdit: ''
        }
    },
    methods: {
        DeleteTodo(id, check){
            if(check === 1){
                this.$store.dispatch('DelTodo', id)
            }else{
                alert('Cần Check xác nhận công việc trước khi xóa')
                console.log(this.phantram)
            }
        },
        EditTodo(id, complete){
            const Addlist = document.getElementById('edit_todos_'+id)
            this.showEdit = id
            if(complete === 1){
                Addlist.classList.remove("todo_active");
            }
        },
        HandleCloseEdit(x){
            this.showEdit = ''
            const Addlist = document.getElementById('edit_todos_'+x.id)
            if(x.complete === 1){
                Addlist.classList.add("todo_active");
            }
        }
    },
    computed: {
        Progress() {
            if(this.$store.state.classProgress === 'bg_all_todos') {
                return this.$store.getters.progressAllTodos
            }else if(this.$store.state.classProgress === 'bg_all_done_todos'){
                return this.$store.getters.progressDone
            }else if(this.$store.state.classProgress === 'bg_all_slacking_todos'){
                return this.$store.getters.progressSlacking
            }
            else return false
        }
    },
    components: {
        'EditTodo': require('./EditTodos.vue').default,
    }
}
</script>

<style>

</style>