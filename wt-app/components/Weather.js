import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        city: '-',
        country: '-',
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=2d1f18773df95c8108138fb8509b1893`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        city: json.name,
                        country: json.sys.country,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <View>
            <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                <View style={styles.view}>
                    <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>The Weather Today</Text>
                    <View style={styles.circle}>
                        <Forecast {...forecastInfo} />
                    </View>
                </View>
            </ImageBackground >
        </View >
    );
}


const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    view: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "white",
    },
    text: {
        fontSize: 20
    },
    circle: {
        borderRadius: 300 / 2,
        width: 300,
        height: 300,
        backgroundColor: "#0E1838",
        justifyContent: "center",
        alignItems: 'center'
    }
});
