import React from 'react';

import {
  TouchableOpacity,
  Text,
  ViewStyle,
} from 'react-native';

import { buttonStyles } from '../styles/styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  danger?: boolean;
}

export function Button({
  title,
  onPress,
  style,
  danger = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        danger && buttonStyles.dangerButton,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={buttonStyles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}