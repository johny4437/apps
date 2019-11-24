import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
import Colors from '../../styles/Colors';

const entriesGrouped = [
    {key:'1', description:'Alimentação', amount:200},
    {key:'2', description: 'Combustivel', amount:12},
    {key:'3', description:'Aluguel', amount:120},
    {key: '4', description:'Lazer', amount:250}
];


const Main = ({navigation}) => {
    const currentBalance = 2145.64;
    return (
        <View style={styles.container}>
            <BalancePanel currentBalance={currentBalance}/>
            <EntrySummary  entriesGrouped={ entriesGrouped}/>
            <EntryList navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        
    
    }
})

export default Main;
