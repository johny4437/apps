import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
    const bulletLineY=0;
    return (
        <View>
            <Svg height="50" width="30">
                <Rect
                    x="9"
                    y={bulletLineY}
                    width="1.5"
                    height="50"
                    fill={Colors.white}
                />

                

            </Svg>
            
        </View>
    )
}


const styles = StyleSheet.create({

    entry:{

    },
});

export default EntryListItem
