import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';


const EntrySummaryList = ({ entriesGrouped}) => {

    return (
        <View style={styles.container}>
            
            <FlatList
            data={ entriesGrouped}
    renderItem={({item})=><Text>-{item.description}:${item.amount}</Text>}
    >

            </FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
    }, 
    
})

export default EntrySummaryList
