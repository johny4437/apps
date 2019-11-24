import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
const BalancePanel = ({currentBalance}) => {
    
    return (
        <View style={styles.container}>
        <LinearGradient colors={[Colors.violet, Colors.blue]} style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        </LinearGradient>
        <TouchableOpacity style={styles.button}>
            <Text>+</Text>
        </TouchableOpacity>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{

    },
    panel:{
      //flex:1,
      paddingVertical:10,
    },
    button:{
        backgroundColor:Colors.green,
        borderRadius:150,
        alignSelf:'flex-end',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        marginTop:-25,
        marginRight:10,
        
        
        
    },

})
export default BalancePanel;
