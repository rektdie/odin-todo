import { listProjects, listTodos} from "./dom";
 
let projects = [];
listProjects();

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

function createProject(title){
    projects.push(project(title));
}

export { projects, createProject };