import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'; 

import {saveEntry} from '../../Services/Entries';
import {deleteEntry} from '../../Services/Entries';
import NewEntryInput from './NewEntryInput';
import BalancePanelLabel from '../../Components/BalancePanel/BalancePanelLabel';
import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  

  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = ()=> {

    if(parseFloat(amount)!== 0){
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };

    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (

    
    <View style={styles.container}>
     <BalancePanelLabel/>

      <View>
       <NewEntryInput value={amount} onChangeValue={setAmount}/>
         
          <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={()=>{
          isValid() && onSave()
        }} />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.background,
   flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;