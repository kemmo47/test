import { createStore } from 'vuex'
import axios from 'axios'

const url = 'http://backend.localhost/api'

const store = createStore({
    state: {
        username: 'Hồ Ngọc Bảo Long',
        age: 21,
        oldtodos: [],
        todos:[],
        auth: {checkLogin: true},
        progress: '',
        classProgress: 'bg_all_todos',
    },

    getters: {
        progressDone: (state) => {
            const doneTodos = state.oldtodos.filter(todo => todo.todo_complete === 1);
            return Math.round((doneTodos.length / state.oldtodos.length) * 100)
        },
        progressSlacking: (state) => {
            const slackingTodos = state.oldtodos.filter(todo => todo.todo_complete === 0);
            return Math.round((slackingTodos.length / state.oldtodos.length) * 100)
        },
        progressAllTodos: state => {
            if(state.oldtodos.length > 0){
                return state.progress = 100
            }else{
                return state.progress = 0
            }
        }
    },

    mutations: {
        //Show todos
        LIST_TODOS(state, todos){
            state.todos = todos
            state.oldtodos = todos
        },
        SET_SHOW_TODOS(state, res){
            if(res.text === 'all_todos'){
                state.classProgress = 'bg_all_todos'
                state.todos = res.todos
            }else if(res.text === 'all_done_todos'){
                state.classProgress = 'bg_all_done_todos'
                state.todos = res.todos.filter(todo => todo.todo_complete === 1)
            }else if(res.text === 'all_slacking_todos'){
                state.classProgress = 'bg_all_slacking_todos'
                state.todos = res.todos.filter(todo => todo.todo_complete === 0)
            }
        },
        //Show todos

        TOGGLE_AUTH_LOGIN(state){
            state.auth.checkLogin = true
        },
        TOGGLE_AUTH_LOGOUT(state){
            state.auth.checkLogin = false
        },

        // action todos
        TOGGLE_CHECK(state, key){
            if(state.todos[key].todo_check === 0){
                state.todos[key].todo_check = 1
            }else{
                state.todos[key].todo_check = 0
            }
        },
        TOGGLE_CHECK_ALL(state){
            state.todos.filter(todo => {
                todo.todo_check = 1
            })
        },
        TOGGLE_UNCHECK_ALL(state){
            state.todos.filter(todo => {
                todo.todo_check = 0
            })
        },
        TOGGLE_TODOS(state, req){
            state.todos = req.todos
            state.oldtodos = req.todos
            state.classProgress = 'bg_all_todos'
            alert(req.message)
        },
        //action todos

    },

    actions: {
        SetShowTodos({commit}, e) {
            axios.get(url+'/index')
                .then(response => {
                    commit('SET_SHOW_TODOS', {
                        todos:response.data.data,
                        text:e
                    })
                })
        },
        ListAllTodos({commit}){
            axios.get(url+'/index')
                .then(response => {
                    commit('LIST_TODOS', response.data.data)
                })
        },

        CheckTodo({commit}, key){
            commit('TOGGLE_CHECK', key)
        },

        CheckAllTodos({commit}){
            commit('TOGGLE_CHECK_ALL')
        },
        UnCheckAllTodos({commit}){
            commit('TOGGLE_UNCHECK_ALL')
        },

        DoneAllTodos({commit}){
            const message = 'Hoàn Thành Công Việc Thành Công'
            const params = this.state.todos
            axios.post(url+'/done-all-todos', {params})
                .then(response => {
                    commit('TOGGLE_TODOS', {todos:response.data.data, message:message})
                })
        },
        DelAllTodos({commit}, params){
            const message = 'Xóa Tất Cả Thành Công'
            axios.post(url+'/del-all-todos', {params})
                .then(response => {
                    commit('TOGGLE_TODOS', {todos:response.data.data, message:message})
                })
        },
        DelTodo({commit}, id){
            const message = 'Xóa Thành Công'
            axios.post(url+'/del-todo', {id})
                .then(response => {
                    commit('TOGGLE_TODOS', {todos:response.data.data, message:message})
                })
        },
        AddTodos({commit}, info){
            const message = 'Thêm Thành Công'
            axios.post(url+'/add-todo', {info})
                .then(response => {
                        commit('TOGGLE_TODOS', {todos:response.data.data, message:message})
                })
        },
        EditTodo({commit}, params){
            const message = 'Edit Thành Công'
            axios.post(url+'/edit-todo', {params})
                .then(response => {
                    commit('TOGGLE_TODOS', {todos:response.data.data, message:message})
                })
        },

    }
})

export default store