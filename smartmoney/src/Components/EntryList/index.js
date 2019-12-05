import React, {useEffect, useState} from 'react';
import {View, Text,Button, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';

import {getEntries} from '../../Services/Entries';

const EntryList = ({navigation}) => {
  [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

  return (
    <Container  title="Últimos lançamentos"
    actionLabelText="últimos 7 dias"
    actionButtonText="Ver mais"
    onPressActionButton={()=>{}}>
      
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item}) => <EntryListItem entry={item}/>}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default EntryList;