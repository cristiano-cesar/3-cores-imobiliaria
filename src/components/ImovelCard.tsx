import React from 'react';

import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';

import { Imovel } from '../data/imoveis';
import { imovelCardStyles } from '../styles/styles';

interface ImovelCardProps {
  imovel: Imovel;
  onPress: () => void;
}

export function ImovelCard({
  imovel,
  onPress,
}: ImovelCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        imovelCardStyles.card,
        pressed && imovelCardStyles.cardPressed,
      ]}
      onPress={onPress}
    >
      {/* Imagem do imóvel */}
      <Image
        source={imovel.imagem}
        style={imovelCardStyles.image}
        resizeMode="cover"
      />

      {/* Informações do imóvel */}
      <View style={imovelCardStyles.content}>

        {/* Título */}
        <Text style={imovelCardStyles.title}>
          {imovel.titulo}
        </Text>

        {/* Descrição resumida */}
        <Text style={imovelCardStyles.description}>
          {imovel.descricao}
        </Text>

        {/* Valor */}
        <Text style={imovelCardStyles.price}>
          {imovel.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>

      </View>
    </Pressable>
  );
}