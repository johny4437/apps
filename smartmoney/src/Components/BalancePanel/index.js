import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';

const BalancePanel = ({currentBalance}) => {
    
    return (
        <View style={styles.container}>
        <BalancePanelLabel currentBalance={currentBalance} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      //flex:1,
      alignItems:'center',
    }
})
export default BalancePanel;
