import { th } from "date-fns/locale";

let listOfProjects = []

const Projects = class Projects {
    constructor(name, todosList) {
        this.name = name;
        this.todosList = [];
    };
    addProject() {
        listOfProjects.push(this)
    }
    removeProject() {
        for(let i = 0; i<listOfProjects.length; i++) {
            if (listOfProjects[i].name === this.name) {
                listOfProjects.splice(i, 1)
            } else {}
        }
    }
    addTodo() {
        const Todo = class Todo {
            constructor(title, description, dueDate, priority) {
                this.title = title;
                this.description = description;
                this.dueDate = dueDate; 
                this.priority = priority;
            }
        }

        const newTodo = new Todo(
            prompt('What is the title of the new Todo'),
            prompt('What is the description of new Todo?'),
            prompt('What is deadline of the new Todo?'),
            prompt('What is priority of the new Todo?')
            )

        this.todosList.push(newTodo)
    }
    removeTodo() {
        for (let i = 0; i < this.todosList.length; i++) {
            if (this.todosList[i].title === this.title) {
                this.todosList.splice(i, 1)
            }
            else {}
        }
    }
}

const szkola = new Projects('szkola', [{title: '1', description: '2', dueDate: '3', priority: '4'}])
const gimnazjum = new Projects('gimnazjum', ['uczyc sie'])
szkola.addProject()
gimnazjum.addProject()


export {listOfProjects}
export {Projects}