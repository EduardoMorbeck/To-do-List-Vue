new Vue ({
    el: "#app",
    data: {
        currentTodo: "",
        todos: []
    },
    methods: {
        addTodo() {
            if(!this.isValidInput()) return alert("Tarefa vazia ou repetida!");
            
            this.todos.push({
                text: this.currentTodo,
                done: false
            });
            this.currentTodo = "";
            this.sortTodos();
        },
        toggleTodo(todo){
            todo.done = !todo.done;
            this.sortTodos();
        },
        delTodo(todo){
            this.todos = this.todos.filter(el => el.text !== todo.text);
        },
        sortTodos(){
            this.todos.sort((a,b) => a.done - b.done);
        },
        isValidInput(){
            return !(!this.currentTodo.trim() ||
        this.checkIfTodoExists());
        },
        checkIfTodoExists(){
            return this.todos.some((todo) => todo.text === this.currentTodo.trim());
        }
    },
    computed:{
        filteredTodos(){
            return this.todos.filter(
                todo =>
                    todo.text.toLowerCase().match(this.currentTodo.toLowerCase())
            );
        }
    }
})