import React from 'react'
import { View, Text } from 'react-native'


export default function Forecast(props) {
    return (
        <View >
            <Text>{props.city}</Text>
            <Text>{props.country}</Text>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <View>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
            </View>
        </View >
    );
}
