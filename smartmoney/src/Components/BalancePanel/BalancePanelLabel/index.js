import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const BalancePanelLabel = ({currentBalance}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual:</Text>
    <Text style={styles.amount}>{currentBalance}</Text>
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
    amount:{
        fontSize:20,
        fontWeight:'bold',

    }
})
export default BalancePanelLabel;
