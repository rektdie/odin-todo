import { listProjects, listTodos, projectForm, todoForm, closeProjectForm, closeTodoForm } from "./dom";
import { format } from "date-fns";

let projects = [];
let currentProject = -1;

if (localStorage.getItem("projects")) {
    projects = JSON.parse(localStorage.getItem("projects"));
    currentProject = localStorage.getItem("currentProject");
    listProjects();
    //listTodos(currentProject);
}

function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("currentProject", currentProject);
}

function setCurrentProject(value) {
    currentProject = value;
}

window.addEventListener("beforeunload", saveProjects)

const todo = (title, description, dueDate, priority, finished) => {
    const done = () => {
        if (finished) {
            finished = false;
        } else {
            finished = true;
        }
    };

    const changePriority = () => {
        if (priority === "Low") {
            priority = "Medium";
        } else if (priority === "Medium") {
            priority = "High"
        } else {
            priority = "Low";
        }
        const changePriority = () => {
            if (priority === "Low") {
                priority = "Medium";
            } else if (priority === "Medium") {
                priority = "High"
            } else {
                priority = "Low";
            }
        };
    };

    const isFinished = () => {
        return finished;
    };

    const getPriority = () => {
        return priority;
    };

    const getTitle = () => {
        return title;
    };

    const getDescription = () => {
        return description;
    };

    const getDueDate = () => {
        return dueDate;
    };

    return { done, changePriority, isFinished, getPriority, getTitle, getDescription, getDueDate };
};

const project = (name) => {
    const todos = [];

    const addTodo = newTodo => {
        todos.push(newTodo);
    };

    const delTodo = todo => {
        todos.splice(todos.indexOf(todo), 1);
    };
    return { name, todos, addTodo, delTodo };
};

function createProject(title) {
    projects.push(project(title));
}

function deleteProject(index) {
    projects.splice(index, 1);
}

projectForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(projectForm);

    const projectTitles = projects.map(project => project.name);
    const newProjectTitle = formData.get("title");

    // Checking if project already exists or not
    if (!projectTitles.includes(newProjectTitle)) {
        createProject(newProjectTitle);
        currentProject = projects.length - 1;

        closeProjectForm();
        listProjects();

        const lastProject = projects[projects.length - 1];
        listTodos(lastProject);
    }
});

todoForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(todoForm);
    const myNewTodo = todo(
        formData.get("title"),
        formData.get("description"),
        format(new Date(formData.get("dueDate")), "yyyy/MM/dd"),
        formData.get("priority"),
        false
    );

    projects[currentProject].addTodo(myNewTodo);

    closeTodoForm();
    listTodos(projects[currentProject]);
});


export { projects, currentProject, setCurrentProject, deleteProject };
