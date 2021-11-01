<template>
    <div class="mb-3">
        <label class="form-label">Add todos</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Add todos" aria-describedby="add_todos" v-model="infoTodo" 
                v-on:keyup.enter="Add_Todos">
            <button class="input-group-text btn btn-success" id="add_todos" v-on:click="Add_Todos">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'InputTodo',
    data(){
        return{
            infoTodo:'',
        }
    },
    methods: {
        Add_Todos(){
            if(this.infoTodo === ''){
                alert('Bạn chưa nhập gì')
            }else{
                this.$store.dispatch('AddTodos', this.infoTodo)
                this.infoTodo = ''
            }
        },
    }
}
</script>

<style>

</style>