import React, { useState , useEffect } from 'react';
import { View , Text, StyleSheet , StatusBar } from 'react-native';
import api from './services/api'

//View: Div, footer, header, main, aside , section
//Text: p, span, strong, h1,h2,h3

export default function App(){

    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('/projects').then(response =>  {
            setProjects(response.data);
        })
    }, [])


    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#711797" transparent/>
            <View style={styles.container}>
                {projects.map(project =><Text style={styles.title} key={project.id}>{project.title}</Text>)}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#711797',
       justifyContent: 'center',
       alignItems: 'center'
   },
   title:{
       color: '#ffffff',
       fontSize: 40,
       fontWeight: 'bold'
   }
});