import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = ({entriesGrouped}) => {
    return (
        <View style={styles.container}>
            <EntrySummaryList entriesGrouped={entriesGrouped}/>
            <EntrySummaryChart/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
    }
});
export default EntrySummary
