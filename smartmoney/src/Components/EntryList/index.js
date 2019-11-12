import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native';


import getEntries from '../../Services/Entries';
const EntryList = () => {

    [entries, setEntries] = useState([]);

    useEffect(()=>{
        
        async function loadentries(){

            const data = await getEntries();
            setEntries(data);

        }

        loadentries();
    },
        console.log("EntryList :: useEffect")
    ,[]);
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ultimos Lançamentos</Text>
            <FlatList
                data={entries}
    renderItem={({item})=><Text>-{item.description}:${item.amount}</Text>}
            
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    label:{

        fontSize:18,
        fontWeight:'bold',
    }
})

export default EntryList;
