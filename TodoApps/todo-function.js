//mengambil data todos dari local storage
let getSaveTodos = function(){
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON != null)
        return JSON.parse(todosJSON)
    else
        return []
}

//menyimpan todos ke localStorage
let saveTodos = function(){
    localStorage.setItem('todos', JSON.stringify(todos)) // Array-arraynya di convert ke JSON
}

const renderTodos = function(x, y){
    const filteredTodos = x.filter(function(todo){
        const txtMatch = todo.text.toLowerCase().includes(y.searchText.toLowerCase())
        const completedMatch = !filter.hideCompleted || !todo.completed
        return txtMatch && completedMatch // return 2 nilai
    })
    // debugger
    const incompleteTodos = filteredTodos.filter(function(x){
        return !x.completed // False
    });

    document.querySelector('#todo').innerHTML = ''

    
    document.querySelector('#todo').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function(x){
        document.querySelector('#todo').appendChild(generateTodoDOMP(x));
    });
}

const generateTodoDOMP = function(x){
    // const p = document.createElement('p')
    // p.textContent = x.text
    // return p;

    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeBotton = document.createElement('button')

    // menambahkan text
    todoText.textContent = x.text
    todoEl.appendChild(todoText)

    // menambahkan checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = x.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function(){
        toogleTodo(x.id)
        saveTodos()
        renderTodos(todos, filter)
    })    

    // menambahkan button
    removeBotton.textContent = 'x'
    todoEl.appendChild(removeBotton)
    removeBotton.addEventListener('click', function(){
        removeTodo(x.id)
        saveTodos()
        renderTodos(todos, filter)
    })

    return todoEl;
}

const generateSummaryDOM = function (incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary;
}

const removeTodo = function(id){
    const todoIndex = todos.findIndex(
        function(todo){
            return todo.id == id
        }
    )

    if(todoIndex > -1)
        todos.splice(todoIndex, 1) // Menghapus ToDo
}

const toogleTodo = function(id){
    const todoIndex = todos.find(
        function(todo){
            return todo.id == id
        }
    )

    if(todoIndex !== undefined)
        todoIndex.completed = !todoIndex.completed
}