import "./styles.css";
import indicatorSvg from "./svgs/Ellipse 1.svg"

const projectModal = document.querySelector(".project-modal");
const openProjectModal = document.querySelector("#add-project");
const createProjectButton = document.querySelector(".create-project");
const cancelProjectButton = document.querySelector(".cancel-project");
const projectNameInput = document.querySelector("#project-name");
const projectsDiv = document.querySelector(".projects");

let projects = [];
renderProjects();

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

    return {done, changePriority, isFinished, getPriority, getTitle, getDescription};
};

const project = (name) => {
    const todos = [];

    const addTodo = newTodo => {
        todos.push(newTodo);
    };
    return {name, todos, addTodo};
};

openProjectModal.addEventListener("click", () => {
    projectModal.showModal();
});

cancelProjectButton.addEventListener("click", () => {
    projectModal.close();
});

createProjectButton.addEventListener("click", () => {
    if (projectNameInput.value != ""){
        projects.push(project(projectNameInput.value));
        projectModal.close();
        projectNameInput.value = "";
    
        renderProjects();
    }
});

function renderProjects() {
    projectsDiv.innerHTML = "";
    projects.forEach(project => {
        const newProject = document.createElement("button");
        newProject.classList.add("project");

        const indicator = document.createElement("img");
        indicator.classList.add("indicator");
        indicator.setAttribute("src", indicatorSvg);

        const projectName = document.createElement("div");
        projectName.classList.add("project-name");
        projectName.textContent = project.name;

        newProject.appendChild(indicator);
        newProject.appendChild(projectName);

        projectsDiv.appendChild(newProject);
    });
};