import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';


const EntrySummaryList = ({ entriesGrouped}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Categorias</Text>
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
    label:{
        fontSize:16,
        fontWeight:'bold',
    }
})

export default EntrySummaryList
