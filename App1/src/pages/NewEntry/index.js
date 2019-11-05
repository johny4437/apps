import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import BalancePanelLabel from '../../components/BalancePanel/BalancePanelLabel';
import NewEntryForm from './NewEntryForm';

const NewEntry = () => {
    const currentBalance =  2146.64;
    return (
        <View style={styles.container}>
            <BalancePanelLabel currentBalance={currentBalance}/>
            <NewEntryForm/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
    }
});
export default NewEntry
