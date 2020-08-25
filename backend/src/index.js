const express = require('express');
const uuid = require('uuid');
const cors = require('cors');


const app = express();

app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use(express.json());


const projects = [];

app.get("/projects", (req, res) => {
    const { title } = req.query;

    const result = title ? projects.filter(project => project.title.includes(title)) : projects

    return res.json(result);
})

app.post("/projects", (req, res) => {
    const {title, owner} = req.body;
    const project = {
        id: uuid.v4(),
        title,
        owner,
    }
    projects.push(project);
    res.json(project);
})
app.put('/projects/:id', ((req, res) => {
    const { id } = req.params;
    const {title, owner} = req.body;


    const projectIndex = projects.findIndex(project => project.id == id)

    if(projectIndex < 0){
        return res.status(400).json({error: 'Project not found.'})
    }
    const project = {
        title,
        owner,
    }
    projects[projectIndex] =  project;

    return res.json(project)

}))
app.delete('/projects/:id', ((req, res) => {
        const { id } = req.params;

    const projectIndex = projects.findIndex(project => project.id == id)

    if(projectIndex < 0){
        return res.status(400).json({error: 'Project not found.'})
    }
    projects.splice(projectIndex, 1)

    return res.json(projects);
    })
)


app.listen(3339, () => {
    console.log("Server on 🤖")
})