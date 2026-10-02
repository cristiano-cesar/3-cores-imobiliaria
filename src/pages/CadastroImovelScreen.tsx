import React, { useState } from 'react';
import { Banner } from '../components/Banner';

import {Text, TextInput} from 'react-native';

import { NativeStackScreenProps} from '@react-navigation/native-stack';

import { Button } from '../components/Button';
import { ScreenContainer } from '../components/ScreenContainer';

import { RootStackParamList } from '../navigation/AppNavigator';
import { cadastroImovelStyles } from '../styles/styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'CadastroImovel'
>;

export default function CadastroImovelScreen({
  navigation,
}: Props) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  function cadastrarImovel() {
    // Por enquanto, apenas exibimos os dados no console.
    // A persistência será implementada posteriormente.
    console.log({
      titulo,
      descricao,
      valor,
    });
  }

  return (
    <ScreenContainer>

      {/* Banner da imobiliária */}
      <Banner />

      {/* Título da tela */}
      <Text style={cadastroImovelStyles.title}>
        Cadastrar Imóvel
      </Text>

      {/* Campo: título */}
      <Text style={cadastroImovelStyles.label}>
        Título do anúncio
      </Text>

      <TextInput
        style={cadastroImovelStyles.input}
        placeholder="Digite o título do imóvel"
        value={titulo}
        onChangeText={setTitulo}
      />

      {/* Campo: descrição */}
      <Text style={cadastroImovelStyles.label}>
        Descrição
      </Text>

      <TextInput
        style={[
          cadastroImovelStyles.input,
          cadastroImovelStyles.descriptionInput,
        ]}
        placeholder="Digite a descrição do imóvel"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      {/* Campo: valor */}
      <Text style={cadastroImovelStyles.label}>
        Valor
      </Text>

      <TextInput
        style={cadastroImovelStyles.input}
        placeholder="Digite o valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      {/* Botão de cadastro */}
      <Button
        title="Cadastrar imóvel"
        onPress={cadastrarImovel}
        style={cadastroImovelStyles.button}
      />

      {/* Retorno para a tela inicial */}
      <Button
        title="Voltar para a inicial"
        onPress={() =>
          navigation.navigate('Home')
        }
      />

    </ScreenContainer>
  );
}