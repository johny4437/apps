import React,{useState} from 'react'
import { View, Text, StyleSheet,TextInput,Picker,Button} from 'react-native';
import BalanceLabel from '../../Components/BalancePanel/BalancePanelLabel';
import {saveEntry} from '../../Services/Entries';

const NewEntry = ({navigation}) => {
    const currentBalance = 2145.64;
   
    const entry = navigation.getParam('entry',{
        id:null,
        amount:0,
        entryAt: new Date(),
    });
    const [amount, setAmount] = useState(`${entry.amount}`);

    const save = () =>{

        const value = {
            amount:parseFloat(amount),
        };

        console.log("NewEntry :: save", amount);
        saveEntry(value, entry);
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

export default NewEntry;
