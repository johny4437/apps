import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EntrySummaryList from './EntrySummaryLIst';
import EntrySummaryChart from './EntrySummaryChart';
import Colors from '../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

const EntrySummary = ({ entriesGrouped}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Categorias</Text>
            <EntrySummaryList  entriesGrouped={entriesGrouped}/>
            <EntrySummaryChart/>
            <View style={styles.actionContainer}> 
                <Text style={styles.actionLabel}>Ultimos 7 dias</Text>
                <TouchableOpacity  style={styles.actionButton}>
                    <Icon name="insert-chart" style={styles.actionButtonIcon}/>
                    <Text style={styles.actionButtonText}>Ver Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.asphalt,
        borderRadius:5,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'rgba(255, 255, 255, 0.2)',
        margin:5,
        padding:8,
    },
    label:{
        fontSize:12,
        color:Colors.white,
        marginBottom:5,
    },
    actionContainer:{
        flexDirection:'row',
    },
    actionLabel:{
        flex:1,
        fontSize:12,
        color: Colors.white,
        
    }, 
    actionButton:{
        flexDirection:'row',
    },
    actionButtonIcon:{
        marginTop:4,
        marginRight:2,
        color: Colors.white,
    },
    actionButtonText:{
        fontSize:12,
        color: Colors.white,
    },
})
export default EntrySummary;
