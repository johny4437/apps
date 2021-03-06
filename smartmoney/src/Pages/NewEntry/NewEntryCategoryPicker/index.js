import React,{useState, useEffect} from 'react'
import { View,TouchableOpacity,Text, Modal, FlatList, StyleSheet } from 'react-native';
import Colors from '../../../styles/Colors';
import {getAllCategories} from '../../../Services/Categories';
import { getEntries } from '../../../Services/Entries';
const NewEntryCategoryPicker = () => {

    const [modalVisible, setModalVisible] = useState();
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        async function loadCategories(){
            const data = await getAllCategories();
            setAllCategories(data);
        }
        loadCategories();
        console.log('NewCategoryPicker :: UseEffect..');
       
    }, []);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.pickerButton}
                onPress={()=>{setModalVisible(true)}}
            >
                <Text style={styles.textPicker}>Alimentação</Text>
            </TouchableOpacity>
            
            <Modal animationType="slide" transparent={false} visible={modalVisible}>

                <View style={styles.modal}>

                    <FlatList
                      data={allCategories}
                      keyExtractor={item => item.id}
                      renderItem={({item})=> (
                        <TouchableOpacity style={styles.modalItem}>
                          <Text style={[styles.modalItemText, {color:item.color}]}>{item.name}</Text>
                        </TouchableOpacity>
                      )}
                    />
                <TouchableOpacity  style={styles.closeButton} onPress={()=>setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
                    
                </View>



            

            </Modal>
        </View>
    )
}


const styles =  StyleSheet.create({
    modal:{
        flex:1,
        backgroundColor:Colors.background,

    },
    pickerButton:{
        backgroundColor:Colors.asphalt,
        borderRadius:15,
        marginVertical:10,
        marginHorizontal:20,
        padding:20,
    },
    textPicker:{
        fontSize:28,
        color:Colors.white,
        textAlign:'center',
    },
    modalItem:{
        backgroundColor:Colors.asphalt,
        borderRadius:15,
        marginVertical:10,
        marginHorizontal:20,
        padding:20,
    },
    modalItemText:{
        fontSize:22,
        color:Colors.white,
        textAlign:'center',
    },
    closeButton:{
        alignSelf:'center',
        backgroundColor: Colors.background,
        borderColor:Colors.green,
        borderWidth: 1,
        borderRadius:15,
        marginVertical:5,
        marginHorizontal:20,
        padding:10,
    },
    closeButtonText:{
        color:Colors.green,
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold',
    },
});
export default NewEntryCategoryPicker
