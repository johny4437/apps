import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Container = ({
    title, 
    actionLabelText,
    actionButtonText, 
    children, 
    onPressActionButton
    }) => {
    return (
    <View  style={styles.container}>
<Text style={styles.label}>{title}</Text>
        {children}

        {(actionLabelText || actionButtonText) && (
        
        <View style={styles.actionContainer}> 
        {(actionLabelText) && (
          <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {(actionButtonText) && (
                <TouchableOpacity  style={styles.actionButton} onPress={onPressActionButton}>
                 
                    <Icon name="insert-chart" style={styles.actionButtonIcon}/>
                <Text style={styles.actionButtonText}>{actionButtonText}</Text>
                </TouchableOpacity>
          )} 
            </View>
        )}
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
export default Container
