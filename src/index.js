import { Projects } from "./projects"
import { listOfProjects } from "./projects"

function addingProjects() {
    const addProjectButton = document.querySelector('.addProject')
    addProjectButton.addEventListener('click', function() {
        const name = prompt('What is name of a project')

        const nowy = new Projects(name, [])

        listOfProjects.push(nowy)
        displayProjects()
    })
}
addingProjects()

function displayProjects() {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    for (let i = 0; i < listOfProjects.length; i++) {
        const project = document.createElement('div')
        const name = document.createElement('div')
        const todos = document.createElement('div')
        const removeProjectButton = document.createElement('button')
        const addTodoButton = document.createElement('button')
        
        project.classList.add('project')
        name.classList.add('name')
        todos.classList.add('todos')
        removeProjectButton.classList.add('removeProjectButton')
        addTodoButton.classList.add('addTodoButton')

        removeProjectButton.innerHTML = 'Remove Project'
        addTodoButton.innerHTML = 'Add Todo'

        addTodoButton.addEventListener('click', function() {
            return  listOfProjects[i].addTodo(), displayProjects()
        })

        removeProjectButton.addEventListener('click', function() {
            return listOfProjects[i].removeProject(), displayProjects()
        })

        name.innerHTML = `${listOfProjects[i].name}`

        content.appendChild(project)
        project.appendChild(name)
        project.appendChild(todos)
        project.appendChild(removeProjectButton)
        project.appendChild(addTodoButton)

        for (let n = 0; n < listOfProjects[i].todosList.length; n++) {
            const title = document.createElement('div')
            const description = document.createElement('p')
            const dueDate = document.createElement('div')
            const priority = document.createElement('div')
            const removeTodoButton = document.createElement('button')

            title.classList.add('title')
            description.classList.add('description')
            dueDate.classList.add('dueDate')
            priority.classList.add('priority')
            removeTodoButton.classList.add('removeTodoButton')

            title.innerHTML = `${listOfProjects[i].todosList[n].title}`
            description.innerHTML = `${listOfProjects[i].todosList[n].description}`
            dueDate.innerHTML = `${listOfProjects[i].todosList[n].dueDate}`
            priority.innerHTML = `${listOfProjects[i].todosList[n].priority}`
            removeTodoButton.innerHTML = "Remove todo"

            removeTodoButton.addEventListener('click', function() {
                return listOfProjects[n].removeTodo(), displayProjects()
            })

            todos.appendChild(title)   
            todos.appendChild(description)
            todos.appendChild(dueDate)
            todos.appendChild(priority) 
            todos.appendChild(removeTodoButton)
        }
    }
    

}



// function adddingDOM() {
//     const project = document.querySelectorAll('.project')
//     for (let i = 0; i < project.length; i++) {
//         const button = project[i].querySelector('.addTodoButton')
//         button.addEventListener('click', listOfProjects[i].addTodo())
//     }
// }
// const test = document.querySelector('.test')
// test.addEventListener('click', function() {
//     return adddingDOM()
// })


console.log(listOfProjects)

