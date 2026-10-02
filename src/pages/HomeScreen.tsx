import React from 'react';
import { Banner } from '../components/Banner';

import {Text, View} from 'react-native';

import { NativeStackScreenProps} from '@react-navigation/native-stack';

import { Button } from '../components/Button';
import { ImovelCard } from '../components/ImovelCard';
import { ScreenContainer } from '../components/ScreenContainer';

import { imoveis } from '../data/imoveis';
import { RootStackParamList } from '../navigation/AppNavigator';
import { homeStyles } from '../styles/styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen({
  navigation,
}: Props) {
  return (
    <ScreenContainer>

      {/* Banner da imobiliária */}
      <Banner />

      {/* Nome da imobiliária */}
      <Text style={homeStyles.companyName}>
        3 Cores Imobiliária
      </Text>

      {/* Botão para abrir o cadastro */}
      <Button
        title="Cadastrar imóvel"
        onPress={() =>
          navigation.navigate('CadastroImovel')
        }
        style={homeStyles.registerButton}
      />

      {/* Título da lista */}
      <Text style={homeStyles.sectionTitle}>
        Nossos imóveis
      </Text>

      {/* Lista dos imóveis cadastrados inicialmente */}
      <View>
        {imoveis.map((imovel) => (
          <ImovelCard
            key={imovel.id}
            imovel={imovel}
            onPress={() =>
              navigation.navigate(
                'DetalhesImovel',
                { imovel }
              )
            }
          />
        ))}
      </View>

    </ScreenContainer>
  );
}