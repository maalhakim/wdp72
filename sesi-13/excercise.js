function addStudent() {
  const newTodo = document.getElementById('name').value;
  const newAddress = document.getElementById('address').value;

  let todos = JSON.parse(localStorage.getItem('todos'));

  if (todos) {
    todos.push({
      id: todos[todos.length - 1].id + 1,
      name: newTodo,
      address: newAddress,
      checked: false,
    });
  } else {
    todos = [
      {
        id: 0,
        name: newTodo,
        address: newAddress,
        checked: false,
      },
    ];
  }

  localStorage.setItem('todos', JSON.stringify(todos));

  document.getElementById('name').value = '';
  document.getElementById('address').value = '';

  displayStudents();
}
function setComplete(checked, id) {
  let todos = JSON.parse(localStorage.getItem('todos'));

  todos = todos.map((el) => {
    if (el.id === Number(id)) {
      el.checked = checked;
    }
    return el;
  });

  localStorage.setItem('todos', JSON.stringify(todos));
  displayStudents();
}
function deleteTodo(id) {
  let todos = JSON.parse(localStorage.getItem('todos'));

  todos = todos.filter((el) => el.id !== Number(id));

  if (todos.length) {
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    localStorage.removeItem('todos');
  }
  displayStudents();
}
function displayStudents() {
  const todos = JSON.parse(localStorage.getItem('todos'));

  let list = '';

  if (todos) {
    for (let i = 0; i < todos.length; i++) {
      list += `
          <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
            <li class="list-group-item d-flex align-item-center">
              <div class="form-check">
                  <input type="checkbox" name="" id="${todos[i].id}" class="form-check-input" ${todos[i].checked ? 'checked' : ''} onchange="setComplete(this.checked, this.id)">
              </div>
            </li>
            <li class="list-group-item  align-item-center flex-grow-1">
                <p class="lead fw-normal mb-0">${todos[i].name}</p>
                <p class="lead fw-normal mb-0">${todos[i].address}</p>
            </li>
    
            <li class="list-group-item d-flex align-item-center flex-grow-1">
                <button class="btn btn-danger" id=${todos[i].id} onclick="deleteTodo(this.id)">Delete</button>
            </li>
        </ul>
          `;
    }
  }

  document.getElementById('list-students').innerHTML = list;
}
