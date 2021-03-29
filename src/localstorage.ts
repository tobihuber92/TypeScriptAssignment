import { list } from "./dom-utils";

function saveTodos() {
  const allTodos = list.querySelectorAll("li");
  const todos: Array<Todo> = [];
  for (const todoListElement of allTodos) {
    const text = todoListElement.textContent as string;
    const todo: Todo = {
      content: text.slice(0, -1),
      checked: todoListElement.classList.contains("checked"),
    };
    todos.push(todo);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function loadTodos() {
  let todos: Array<Todo>;
  if (localStorage.getItem("todos")) {
    const json = localStorage.getItem("todos") as string;
    todos = JSON.parse(json);

    todos.forEach((todo) => {
      const listElement = document.createElement("li");
      const textContent = todo.content;
      if (todo.checked) {
        listElement.classList.add("checked");
      }
      const todoTextContentElement = document.createTextNode(textContent);
      //add Text to List Element
      listElement.appendChild(todoTextContentElement);
      document.getElementById("myUL")?.appendChild(listElement);
    });
  }
}

export function addLocalStorageOption() {
  window.addEventListener("beforeunload", saveTodos);
}

interface Todo {
  content: string;
  checked: boolean;
}
