import React, { useState } from 'react';
import Header from "./Components/Header";



function App(){
    const [projects, setProjects] = useState(['Back-end', 'Front-END']);

    function handleAddProject(){

        setProjects([...projects, `Novo Projeto ${Date.now()}`])
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