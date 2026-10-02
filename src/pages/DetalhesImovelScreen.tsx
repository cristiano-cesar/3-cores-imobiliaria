import React from 'react';
import { Banner } from '../components/Banner';

import { Image, Text} from 'react-native';

import { NativeStackScreenProps} from '@react-navigation/native-stack';

import { Button } from '../components/Button';
import { ScreenContainer } from '../components/ScreenContainer';

import { RootStackParamList } from '../navigation/AppNavigator';
import { detalhesImovelStyles } from '../styles/styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'DetalhesImovel'
>;

export default function DetalhesImovelScreen({
  route,
  navigation,
}: Props) {
  const { imovel } = route.params;

  function excluirImovel() {
    // Por enquanto, o botão apenas retorna à tela inicial.
    // A exclusão real poderá ser implementada posteriormente.
    navigation.navigate('Home');
  }

  return (
    <ScreenContainer>
      {/* Banner da imobiliária */}
      <Banner />

      {/* Imagem principal do imóvel */}
      <Image
        source={imovel.imagem}
        style={detalhesImovelStyles.image}
        resizeMode="cover"
      />

      {/* Título do imóvel */}
      <Text style={detalhesImovelStyles.title}>
        {imovel.titulo}
      </Text>

      {/* Descrição detalhada */}
      <Text style={detalhesImovelStyles.description}>
        {imovel.descricaoDetalhada}
      </Text>

      {/* Valor do imóvel formatado em reais */}
      <Text style={detalhesImovelStyles.price}>
        {imovel.valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>

      {/* Botão para excluir o imóvel */}
      <Button
        title="Excluir imóvel"
        danger
        onPress={excluirImovel}
        style={detalhesImovelStyles.deleteButton}
      />

      {/* Botão para retornar à tela inicial */}
      <Button
        title="Voltar para a inicial"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </ScreenContainer>
  );
}