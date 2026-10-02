import React, { ReactNode } from 'react';

import {
  ScrollView,
  View,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import { screenContainerStyles } from '../styles/styles';

interface ScreenContainerProps {
  children: ReactNode;
  scroll?: boolean;
}

export function ScreenContainer({
  children,
  scroll = true,
}: ScreenContainerProps) {
  // Quando scroll estiver habilitado,
  // usamos ScrollView para permitir rolagem da tela.
  if (scroll) {
    return (
      <SafeAreaView
        style={screenContainerStyles.safeArea}
      >
        <ScrollView
          contentContainerStyle={
            screenContainerStyles.scrollContent
          }
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Quando scroll estiver desabilitado,
  // usamos apenas um View como conteúdo.
  return (
    <SafeAreaView
      style={screenContainerStyles.safeArea}
    >
      <View style={screenContainerStyles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
}