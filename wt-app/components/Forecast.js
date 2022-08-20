import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Forecast(props) {
    return (
        <>
            <Text style={{color: "#fff", fontSize: 25, fontWeight: "medium"}}>Amphoe {props.city}</Text>
            <Text style={{color: "#fff",fontSize: 20}}>{props.country === "TH" ? "Thailand" : props.country}</Text>
            
            <View>
                <Text style={{color: "#fff",fontSize: 40}}>{props.temp} °C</Text> 
            </View>
            <Text style={{color: "#fff",}}>{props.main}</Text>
            <Text style={{color: "#fff",}}>{props.description}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    
})

