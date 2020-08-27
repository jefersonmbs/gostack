import React, { useState , useEffect } from 'react';
import { SafeAreaView , FlatList , Text, StyleSheet , StatusBar } from 'react-native';
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
            <FlatList
                style={styles.container}
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({ item }) => (
                    <Text style={styles.title}>{item.title}</Text>
                )}
            />
            {/*<View style={styles.container}>
            {projects.map(project =><Text style={styles.title} key={project.id}>{project.title}</Text>)}
            </View>*/}
        </>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#711797',


   },
   title:{
       color: '#ffffff',
       fontSize: 30,
       fontWeight: 'bold'
   }
});