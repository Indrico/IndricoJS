let todos = getSaveTodos()

document.querySelector('#new-todo').addEventListener('submit', function(e){ // Submit
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.txtNewToDo.value, // Di dalam element form bernama txtNewToDo Nilainya
        completed: false
    })
    // debugger
    saveTodos();
    renderTodos(todos, filter);
    e.target.elements.txtNewToDo.value = ""
});

document.querySelector('#search-text').addEventListener('input', function(e){ // pada saat diketik
    // console.log(e.target.value)
    filter.searchText = e.target.value; //Disimpan di filter
    renderTodos(todos, filter);
});

document.querySelector('#hide-completed').addEventListener('change', function(e){ // pada saat diketik
    // console.log(e.target.value)
    filter.hideCompleted = e.target.checked; //Disimpan di filter nilainya true dan false
    renderTodos(todos, filter);
});

const filter = {
    searchText : '',
    hideCompleted : false
}

renderTodos(todos, filter);

console.log(uuidv4())