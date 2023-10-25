import { listProjects, listTodos, projectForm, todoForm, closeProjectForm, closeTodoForm } from "./dom";
import { format } from "date-fns";
 
let projects = [];
listProjects();

let currentProject = 0;

function setCurrentProject(value) {
    currentProject = value;
}

const todo = (title, description, dueDate, priority, finished) => {
    const done = () => {
        finished = true;
    };

    const changePriority = () => {
        if (priority === "Low") {
            priority = "Medium";
        } else if (priority === "Medium") {
            priority = "High"
        } else {
            priority = "Low";
        }
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

    return {done, changePriority, isFinished, getPriority, getTitle, getDescription, getDueDate};
};

const project = (name) => {
    const todos = [];

    const addTodo = newTodo => {
        todos.push(newTodo);
    };
    return {name, todos, addTodo};
};

function createProject(title) {
    projects.push(project(title));
}

projectForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(projectForm);

    const projectTitles = projects.map(project => project.name);
    const newProjectTitle = formData.get("title");

    // Checking if project already exists or not
    if (!projectTitles.includes(newProjectTitle) && newProjectTitle !== ""){
        createProject(newProjectTitle);
        currentProject = projects.length-1;

        closeProjectForm();
        listProjects();

        const lastProject = projects[projects.length-1];
        listTodos(lastProject);
    }
});

todoForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(todoForm);
    const myNewTodo = todo(
        formData.get("title"),
        formData.get("description"),
        format(new Date(formData.get("dueate")), "yyy/M/dd"),
        formData.get("priority"),
        false
    );

    projects[currentProject].addTodo(myNewTodo);

    closeTodoForm();
    listTodos(projects[currentProject]);
});


export { projects, currentProject, setCurrentProject };
