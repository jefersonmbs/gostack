import React, { useState , useEffect } from 'react';
import Header from './Components/Header';
import './App.css';
import api from './services/api';


function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response =>  {
            setProjects(response.data);
        })
    }, [])

    async function handleAddProject(){
       // setProjects([...projects, `Novo Projeto ${Date.now()}`])
      const response = await api.post('/projects', {
                title: `New-APP ${Date.now()}`,
                owner: "Jeferson"
            });
      const project = response.data;

      setProjects([...projects, project])
    }

    return (
       <>
           <Header title='Projects'/>
            <ul>
                {projects.map(projects =>
                    <li key={projects.id}>{projects.title}</li>
                )}
            </ul>
           <button type='button' onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;