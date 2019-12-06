import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EntrySummaryList from './EntrySummaryLIst';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '../Core/Container';

const entriesGrouped = [
    {key:'1', description:'Alimentação', amount:200},
    {key:'2', description: 'Combustivel', amount:12},
    {key:'3', description:'Aluguel', amount:120},
    {key: '4', description:'Lazer', amount:250}
];

const EntrySummary = ({onPressActionButton}) => {
    return (
        <Container  
        title="Categorias"
        actionLabelText="Últimos 7 dias "
        actionButtonText="Ver Mais"
        onPressActionButton={onPressActionButton}
        >
            
            <EntrySummaryList entriesGrouped={entriesGrouped}  />
            <EntrySummaryChart/>
            
        </Container>
    )
}

export default EntrySummary;
