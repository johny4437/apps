import React from 'react';
import {View, Picker, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
    const currentBalance= 2146.64;

  const entriesGrouped = [
    {key:'1', description:'Alimentação', amount:200},
    {key:'2', description: 'Combustivel', amount:12},
    {key:'3', description:'Aluguel', amount:120},
    {key: '4', description:'Lazer', amount:250}
]
const entries = [
    {key:'1', description:'Padaria Isa', amount:34},
    {key:'2',  description:'Posto Ipiranga',  amount:12},
    {key:'3', description:'Supermercados Dia', amount:54}
]

  return (
    <View>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;