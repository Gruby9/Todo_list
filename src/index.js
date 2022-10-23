import { Projects } from "./projects"
import { listOfProjects } from "./projects"



const szkola = new Projects('szkola', [])
const gimnazjum = new Projects('gimnazjum', ['uczyc sie'])
console.log(szkola)
console.log(gimnazjum)
szkola.addProject()
gimnazjum.addProject()
szkola.removeProject()
console.log(listOfProjects)

