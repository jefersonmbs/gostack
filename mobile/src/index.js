import React from 'react';
import { View , Text, StyleSheet , StatusBar } from 'react-native';

//View: Div, footer, header, main, aside , section
//Text: p, span, strong, h1,h2,h3

export default function App(){
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#711797" transparent/>
            <View style={styles.container}>
                <Text style={styles.title}>Hello Word</Text>
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