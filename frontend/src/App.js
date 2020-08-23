import React, { useState } from 'react';
import Header from "./Components/Header";
import './App.css';
import bg from "./assets/812062.png";


function App(){
    const [projects, setProjects] = useState(['Back-end', 'Front-END']);

    function handleAddProject(){

        setProjects([...projects, `Novo Projeto ${Date.now()}`])
    }

    return (
       <>
           <Header title="Projects"/>

           <img src={bg} alt="Background"/>

            <ul>
                {projects.map(projects => <li key={projects}>{projects}</li>)}
            </ul>
           <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;