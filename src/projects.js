let listOfProjects = []

const Projects = class Projects {
    constructor(name, todosList) {
        this.name = name;
        this.todosList = todosList;
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
}

export {listOfProjects}
export {Projects}