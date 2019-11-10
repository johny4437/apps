import React from 'react'
import { View, Text, StyleSheet,Button} from 'react-native';
import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
const entriesGrouped = [
    {key:'1', description:'Alimentação', amount:200},
    {key:'2', description: 'Combustivel', amount:12},
    {key:'3', description:'Aluguel', amount:120},
    {key: '4', description:'Lazer', amount:250}
];
const entries = [
    {key:'1', description:'Padaria Isa', amount:34},
    {key:'2',  description:'Posto Ipiranga',  amount:12},
    {key:'3', description:'Supermercados Dia', amount:54}
];

const Main = ({navigation}) => {
    const currentBalance = 2145.64;
    return (
        <View style={styles.container}>
            <BalancePanel currentBalance={currentBalance}/>
            <Button title="Adicionar" onPress={()=>navigation.navigate('NewEntry')}></Button>
            <EntrySummary  entriesGrouped={ entriesGrouped}/>
            <EntryList entries={entries}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    
    }
})

export default Main;
