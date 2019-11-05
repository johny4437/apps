import React from 'react'
import { View, Text, StyleSheet,TextInput, Picker, Button} from 'react-native'

const NewEntryForm = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} ></TextInput>
            <TextInput style={styles.input} ></TextInput>

            <Picker>
                <Picker.Item label="Alimentação"/>
                <Picker.Item label="transporte"/>
            </Picker>
            <Button title="Camera"></Button>
            <Button title="GPS"></Button>
            <Button title="Adicionar"></Button>
            <Button title="Cancelar"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
    }, 
    input:{
        borderColor:"#FFF"
    }
});
export default NewEntryForm
