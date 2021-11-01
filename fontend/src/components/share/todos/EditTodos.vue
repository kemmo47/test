<template>
    <div class="input-group">
        <div class="input-group-prepend">
            <button type="button" class="btn btn-success" v-on:click="SuccessEditTodo(this.todo_complete, this.todo_id)">Edit</button>
        </div>
        <input type="text" class="form-control" v-model="todo_edit" v-on:keyup.enter="SuccessEditTodo(this.todo_complete, this.todo_id)">
        <div class="input-group-append">
            <button type="button" class="btn btn-danger" v-on:click="CloseEdit(this.todo_complete, this.todo_id)">x</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todo_edit: this.todo_info
        }
    },
    props: {
        todo_id:{type:Number},
        todo_info:{type:String},
        todo_complete:{type:Number}
    },
    methods:{
        CloseEdit(complete, id){
            this.$emit('CLOSEEDITTODOS', {complete, id})
        },
        SuccessEditTodo(complete, id){
            if(this.todo_edit !== this.todo_info){
                this.$store.dispatch('EditTodo', {info:this.todo_edit, id:this.todo_id})
                this.$emit('CLOSEEDITTODOS', {complete, id})
            }
        },
    }
}
</script>

<style>

</style>