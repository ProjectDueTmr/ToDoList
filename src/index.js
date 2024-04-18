
//KEEP APP LOGIC SEPARATE FROM DOM RELATED

//to do list will have a title, description, due date, priority. maybe notes and checklist

//they will be able to create a section similar to a folder. where users can decide where to put there list.
//there will already by one by default for them.

//USER INTERFACE SHOULD BE ABLE TO DO THESE
//view all projects;
//view all todos inside projects;
//expand a single todo to see more info
//delete a todo

const toggle = document.getElementsByClassName('toggle-button')[0];
const projects = document.getElementsByClassName('navSection')[0];
const content = document.querySelector('.content');
toggle.addEventListener('click', () => {
    projects.classList.toggle("active")
    content.classList.toggle("fullScreen")
});


console.log('hey')


