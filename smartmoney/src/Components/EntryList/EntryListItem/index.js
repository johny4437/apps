import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress }) => {
   
    const bulletLineY= isFirstItem ? 25 : 0;
    const bulletLineHeight= isLastItem ? 25 : 50;
    const showBulletLine = !(isFirstItem && isLastItem);
   // const bulletColor = entry.category.color || Colors.white;
    const bulletColor =  Colors.white;
    return (
        <TouchableOpacity onPress={()=>{
            onEntryPress && onEntryPress(entry);
        }}>
        <View style={styles.container}>
            <View style={styles.bullet}>  

                <Svg  height="50" width="30">

                    {showBulletLine &&(

                    <Rect
                    x="9"
                    y={bulletLineY}
                    width="1.5"
                   height={bulletLineHeight}
                   fill={Colors.background}
                  />                                   
                   )}
                   <Circle
                    cx="10"
                    cy="25"
                    r="8"
                    stroke={Colors.background}
                    strokeWidth="1.5"
                   fill={bulletColor}  

                  />
             </Svg>

            </View>
            
            <View style={styles.description}>
                    <Text style={styles.descriptionText}>{entry.description}</Text>
                <View style={styles.details}>
                    <Icon  style={styles.entryAtIcon} name="access-time" size={12}/>
                    <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>
                    {entry.adress && (
                        <>
                     <Icon style={styles.adressIcon} name="person-pin"/>
                     <Text style={styles.adressText}>{entry.adress}</Text>
                    </>
                    )}
                </View>
            </View>
            
            <View style={styles.amount}>
                <Text style={styles.amountText}>$10</Text>  
            </View>
           
            
        </View>
    </TouchableOpacity>    
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    bullet:{
        
      
    },
    description:{
        flex:1,
        justifyContent:'center',
        //backgroundColor:Colors.blue,
    },
    descriptionText:{
        fontSize:14,
        fontWeight:'bold',
        color:Colors.white,
    },
    details:{
        
        flexDirection:'row',
    },
    entryAtIcon:{
        marginTop:3,
        marginRight:2,
        color:Colors.metal,
    },
    entryAtText:{
        fontSize:12,
        color:Colors.metal,
    },
    adressIcon:{
        marginTop:3,
        marginLeft:5,
        marginRight:2,
        color:Colors.metal,
    },
    adressText:{
        fontSize:12,
        color:Colors.metal,
    },

    amount:{
        justifyContent:'center',
        //backgroundColor:Colors.blueDark,
    },
    amountText:{
        fontSize:14,
        color:Colors.white,
    },
    
    entry:{

    },

});

export default EntryListItem
