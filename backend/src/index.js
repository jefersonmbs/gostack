const express = require('express');
const uuid = require('uuid');


const app = express();
app.use(express.json())

const projects = [];

app.get("/projects", (req, res) => {
    return res.json(projects);
})

app.post("/projects", (req, res) => {
    const {title, owner} = req.body;
    const project = {
        id: uuid(),
        title,
        owner,
    }
    projects.push(project);
    res.json(project);
})
app.put('/projects/:id', ((req, res) => {
    const { id } = req.params;
    return res.json([
        "projeto 4",
        "projeto 2",
        "projeto 3",
    ])

}))
app.delete('/projects/:id', ((req, res) => {
        const { id } = req.params;
        return res.json([
            "projeto 4",
            "projeto 2",
        ])
    })
)


app.listen(3339, () => {
    console.log("Server on 🤖")
})