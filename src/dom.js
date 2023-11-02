import "./styles.css";
import { projects, currentProject, setCurrentProject } from "./index.js";
import indicatorSvg from "./svgs/Ellipse 1.svg";
import calendarSvg from "./svgs/calendar.svg"
import deleteSvg from "./svgs/Close Circle.svg";
import doneSvg from "./svgs/Check Circle.svg";
import newTodoSvg from "./svgs/todo image.svg";

const projectModal = document.querySelector(".project-modal");
const todoModal = document.querySelector(".todo-modal");
const projectModalButton = document.querySelector("#add-project");
const projectsDiv = document.querySelector(".projects");

const projectForm = document.querySelector("#form-project");
const todoForm = document.querySelector("#form-todo");
const cancelProjectButton = document.querySelector(".cancel-project");
const cancelTodoButton = document.querySelector(".cancel-todo");

projectModalButton.addEventListener("click", () => {
    projectModal.showModal();
});

function listProjects() {
    projectsDiv.innerHTML = "";
    projects.forEach(project => {
        const newProject = document.createElement("button");
        newProject.classList.add("project");

        const indicatorDiv = document.createElement("div");
        indicatorDiv.classList.add("indicatorDiv");
        if (project == projects[currentProject]) {

            const indicator = document.createElement("img");
            indicator.classList.add("indicator");
            indicator.setAttribute("src", indicatorSvg);

            indicatorDiv.appendChild(indicator);
        }

        newProject.appendChild(indicatorDiv);

        const projectName = document.createElement("div");
        projectName.classList.add("project-name");
        projectName.textContent = project.name;
        
        newProject.appendChild(projectName);

        projectsDiv.appendChild(newProject);

        const projectNames = projects.map(project => project.name);
        newProject.addEventListener("click", () => {
            setCurrentProject(projectNames.indexOf(newProject.textContent));
            listProjects();
            listTodos(projects[currentProject]);
        });
    });
};

function listTodos(project) {
    const todosDiv = document.querySelector(".todos");
    todosDiv.innerHTML = "";

    project.todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = todo.getTitle();

        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        todoDescription.textContent = todo.getDescription();

        const todoDate = document.createElement("div");
        todoDate.classList.add("todo-date");

        const dateImage = document.createElement("img");
        dateImage.setAttribute("src", calendarSvg);

        const todoDueDate = document.createElement("div");
        todoDueDate.classList.add("todo-dueDate");
        todoDueDate.textContent = todo.getDueDate();

        const todoActions = document.createElement("div");
        todoActions.classList.add("todo-actions");

        const todoDeleteButton = document.createElement("button");
        todoDeleteButton.classList.add("todo-delete");

        const deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("src", deleteSvg);

        const todoPriorityButton = document.createElement("button");
        todoPriorityButton.classList.add("todo-priority");
        todoPriorityButton.textContent = todo.getPriority();

        const todoDoneButton = document.createElement("button");
        todoDoneButton.classList.add("todo-done");

        const doneIcon = document.createElement("img");
        doneIcon.setAttribute("src", doneSvg);

        todoDiv.appendChild(todoTitle);
        if (todo.getDescription() !== "") {
            todoDiv.appendChild(todoDescription);
        }
        todoDiv.appendChild(todoDate);
        todoDate.appendChild(dateImage);
        todoDate.appendChild(todoDueDate);
        todoDiv.appendChild(todoActions);
        todoActions.appendChild(todoDeleteButton);
        todoDeleteButton.appendChild(deleteIcon);
        todoActions.appendChild(todoPriorityButton);
        todoActions.appendChild(todoDoneButton);
        todoDoneButton.appendChild(doneIcon);

        todosDiv.appendChild(todoDiv);

        todoDeleteButton.addEventListener("click", () => {
            const listedTodos = document.querySelectorAll(".todo");
            const selectedTodo = todoDeleteButton.parentElement.parentElement;
            const todoIndex = Array.from(listedTodos).indexOf(selectedTodo);

            projects[currentProject].delTodo(todoIndex);
            listTodos(projects[currentProject]);
        });

        todoPriorityButton.addEventListener("click", () => {
            const listedTodos = document.querySelectorAll(".todo");
            const selectedTodo = todoDeleteButton.parentElement.parentElement;
            const todoIndex = Array.from(listedTodos).indexOf(selectedTodo);
            
            projects[currentProject].todos[todoIndex].changePriority();
            todoPriorityButton.textContent = projects[currentProject].todos[todoIndex].getPriority();
        });
    });
    const newTodo = document.createElement("button");
    newTodo.classList.add("new-todo");
    newTodo.classList.add("todo");
    const newTodoImage = document.createElement("img");
    newTodoImage.setAttribute("src", newTodoSvg);

    newTodo.appendChild(newTodoImage);
    todosDiv.appendChild(newTodo);

    newTodo.addEventListener("click", () => {
        todoModal.showModal();
    });
};

cancelProjectButton.addEventListener("click", () => {
    projectForm.reset();
    projectModal.close();
});

cancelTodoButton.addEventListener("click", () => {
    todoForm.reset();
    todoModal.close();
});

function closeProjectForm() {
    projectForm.reset();
    projectModal.close();
}

function closeTodoForm() {
    todoForm.reset();
    todoModal.close();
}

export { listTodos, listProjects, projectForm, todoForm, closeProjectForm, closeTodoForm };
