import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


const EntryList = ({entries}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ultimos lançamentos</Text>
            <FlatList
            data={entries}
            renderItem={({item})=><Text>-{item.description}-${item.amount}</Text>}
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
        fontSize:18,
        fontWeight:"bold",
    }
});

export default EntryList;
