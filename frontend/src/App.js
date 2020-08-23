import React, { useState , useEffect } from 'react';
import Header from './Components/Header';
import './App.css';
import api from './services/api';


function App(){
    const [projects, setProjects] = useState(['Back-end', 'Front-END']);

    useEffect(() => {
        api.get("/projects").then(response =>  {
            console.log(response)
        })
    }, [])

    function handleAddProject(){

        setProjects([...projects, `Novo Projeto ${Date.now()}`])
    }

    return (
       <>
           <Header title='Projects'/>



            <ul>
                {projects.map(projects => <li key={projects}>{projects}</li>)}
            </ul>
           <button type='button' onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;