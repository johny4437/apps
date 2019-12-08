import React,{useState} from 'react'
import { View, TouchableOpacity,Text,StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {

    const[debit,setDebit] = useState((value<0) ? -1 : 1);
    const[debitPrefix,setDebitPrefix] = useState((value<0) ? '-' : '');
    const onChangeDebitCredit = ()=>{
        if(debit < 0){
            setDebit(1);
            setDebitPrefix('');
        }else{
            setDebit(-1);
            setDebitPrefix('-');
        }
        onChangeValue(value * (-1));
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onChangeDebitCredit} style={styles.debtButton}>
                <Text style={styles.debtButtonPrefix}>{debitPrefix}</Text>
                <Text style={styles.debtButtonText}>R$</Text>
            </TouchableOpacity>
            <TextInputMask
            style={styles.input}
            type={'money'}
            options={{
                precision:2,
                separator: ',',
                delimiter:'.',
                unit:'',
                suffixUnit:'',
            }}
            value={value}
            includeRawValueInChangeText={true}
            onChangeText={(maskedValue, rawValue)=>{
                onChangeValue(rawValue * debit);
            }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:Colors.asphalt,
        borderRadius:15,
        marginHorizontal:20,
        marginVertical:10,

    },
    input:{
        flex:1,
        fontSize:28,
        color:Colors.white,
        textAlign:'right',
        paddingLeft:0,
        paddingRight:20,

    },
    debtButton:{
       flexDirection:'row',
       paddingVertical:20,
       paddingHorizontal:20,
        
    },
    debtButtonPrefix:{
        fontSize:28,
        color:Colors.white,
        minWidth: 8,
    },
    debtButtonText:{
        fontSize:28,
        color:Colors.white,
    },

});

export default NewEntryInput
