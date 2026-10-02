import React from 'react';

import {
  Image,
} from 'react-native';

import { bannerStyles } from '../styles/styles';

export function Banner() {
  return (
    <Image
      source={require('../../assets/images/banner.png')}
      style={bannerStyles.banner}
      resizeMode="cover"
    />
  );
}