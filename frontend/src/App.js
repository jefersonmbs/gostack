import React, { useState } from 'react';
import Header from "./Components/Header";
import uuid from 'uuid';

function App(){
    const [projects, setProjects] = useState(['Back-end', 'Front-END']);

    function handleAddProject(){

        setProjects([...projects, `Novo Projeto ${uuid()}`])

        console.log(projects);
    }

    return (
       <>
           <Header title="Projects"/>
            <ul>
                {projects.map(projects => <li key={projects}>{projects}</li>)}
            </ul>
           <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;