import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { TouchableHighlight } from 'react-native-gesture-handler'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code })
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.font}>{place}</Text>
            <Text style={styles.font}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (

        <View style={styles.zipList}>
            <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                <FlatList style={styles.zipList}
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
                <StatusBar style="auto" />
            </ImageBackground>
        </View >

    );

}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#1e1e26",
        borderColor: "#fff",
        borderStyle: "solid",
        borderWidth: "1px"

    },
    font: {
        fontSize: "35",
        color: 'blue',
        fontWeight: 'bold'
    },
    zipList: {
        flexDirection: 'column',

        flex: 40
    },
    backdrop: {
        width: '100%',
        height: '100%'
    }

})
