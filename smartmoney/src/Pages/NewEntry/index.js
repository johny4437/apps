import React from 'react'
import { View, Text,StyleSheet} from 'react-native';
import BalanceLabel from '../../Components/BalancePanel/BalancePanelLabel';
import NewEntryForm from './NewEntryForm';

const NewEntry = () => {
    const currentBalance = 2145.64;
    return (
        <View style={styles.container}>
            <BalanceLabel currentBalance={currentBalance}/>
            <NewEntryForm/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
    }
})

export default NewEntry;
