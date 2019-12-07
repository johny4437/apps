import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Colors from '../../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const BalancePanelLabel = () => {
    const currentBalance= 2654.87;
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <LinearGradient
            style={styles.panel}
             colors = {[Colors.violet, Colors.blue]}>
            <Text style={styles.amount}>{currentBalance}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    label:{
        fontSize:14,
     
        color: Colors.white,

    },
    amount:{
        fontSize:36,
        color: Colors.white,

    },
    panel:{
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:30 ,
        marginVertical:10,
    },
})
export default BalancePanelLabel;
