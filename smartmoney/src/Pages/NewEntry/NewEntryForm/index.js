import React, {useState} from 'react'
import { View, Text, StyleSheet,TextInput,Picker,Button, Us} from 'react-native'
import {saveEntry} from '../../../Services/Entries';



const NewEntryForm = () => {
    const [amount, setAmount] = useState('2.00');

    const save = () =>{

        const value = {
            amount:parseFloat(amount),
        };

        console.log("NewEntry :: save", amount);
        saveEntry(value);
    }
    return (
        <View>
            <TextInput style={styles.input} 
                onChangeText={(text) => setAmount(text)}
                value={amount}

            />

            
            <TextInput style={styles.input} ></TextInput>

            <Picker>
                <Picker.Item label="Alimentação"/>
                <Picker.Item label="transporte"/>
            </Picker>
            <Button title="Camera"></Button>
            <Button title="GPS"></Button>
            <Button title="Adicionar" onPress={save}></Button>
            <Button title="Cancelar"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
    }
})
export default NewEntryForm;
