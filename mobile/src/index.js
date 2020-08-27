import React, { useState , useEffect } from 'react';
import {
    SafeAreaView ,
    FlatList ,
    Text,
    StyleSheet ,
    StatusBar ,
    TouchableOpacity } from 'react-native';
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

    async function handleAddProject(){
        const response = await api.post('/projects', {
            title: `New-APP ${Date.now()}`,
            owner: "Jeferson"
        })
        const project = response.data;
        setProjects([...projects, project])
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#711797" transparent/>
            <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.container}
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({ item }) => (
                    <Text style={styles.title}>{item.title}</Text>
                )}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>
                    Adicionar um Projeto
                </Text>
            </TouchableOpacity>
            </SafeAreaView>
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
       fontWeight: 'bold',
   },
    button:{
        backgroundColor: "#ffffff",
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText:{
       fontSize: 20,
       fontWeight: 'bold',
    }
});