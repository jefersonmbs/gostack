import React from 'react';
import Header from "./Components/Header";

function App(){
    return (
        <>
            <Header title="HomePage" >
                <ul>
                    <li>HomePage</li>
                    <li>Projects</li>
                </ul>
            </ Header>
            <Header title="HomePage2">
                <ul>
                    <li>HomePage2</li>
                    <li>Projects2</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
        );
}

export default App;