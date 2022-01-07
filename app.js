const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchTodo = document.querySelector('.search input');

const generateTemplate = todo => {
	const html = `
		<li class="list-group-item d-flex justify-content-between align-items-center">
			<span>${todo}</span>
			<i class="far fa-trash-alt delete"></i>
		</li>
	`;
	
	list.innerHTML += html;
};

const filterTodos = term => {
	Array.from(list.children)
		.filter(todo => !todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.add('filtered'));
		
	Array.from(list.children)
		.filter(todo => todo.textContent.toLowerCase().includes(term))
		.forEach(todo => todo.classList.remove('filtered'));
};

// Add Todos
addTodo.addEventListener('submit', e => {
	e.preventDefault();
	const todo = addTodo.add.value.trim();
	
	if(todo.length) {
		generateTemplate(todo);
		addTodo.reset();
	}
});

// Delete Todos
list.addEventListener('click', e => {
	if(e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// Search Todos
searchTodo.addEventListener('keyup', () => {
	const term = searchTodo.value.trim().toLowerCase();
	filterTodos(term);
});