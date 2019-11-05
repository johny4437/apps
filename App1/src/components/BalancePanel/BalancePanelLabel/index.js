import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BalancePanelLabel = ({currentBalance}) => {
    return (
        <View>
            <Text style={styles.label}>Saldo</Text>
            <Text style={styles.value}>{currentBalance}</Text>
        </View>
   )
}
const styles = StyleSheet.create({
    container:{
        //flex:1,
    },
    label:{
        fontSize:18,
        
    },
    value:{
        fontSize:18,
        fontWeight:"bold"
    }
});
export default BalancePanelLabel;

