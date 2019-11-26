import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
import Colors from '../../styles/Colors';




const Main = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <BalancePanel  onNewEntryPress={()=>navigation.navigate('NewEntry') }/>
            <EntrySummary  />
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
