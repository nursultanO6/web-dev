const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const createTodoItem = (taskText) => {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const leftContainer = document.createElement('div');
  leftContainer.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskSpan = document.createElement('span');
  taskSpan.className = 'todo-text';
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('completed');
  });

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  leftContainer.appendChild(checkbox);
  leftContainer.appendChild(taskSpan);

  listItem.appendChild(leftContainer);
  listItem.appendChild(deleteButton);

  return listItem;
};

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = todoInput.value.trim();

  if (!taskText) {
    return;
  }

  const newTodoItem = createTodoItem(taskText);
  todoList.appendChild(newTodoItem);

  todoInput.value = '';
  todoInput.focus();
});
