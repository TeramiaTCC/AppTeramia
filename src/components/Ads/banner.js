import React from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-7750224798416325/1357825456';

export default function Banner() {
 return (
    <BannerAd
      unitId={'ca-app-pub-7750224798416325/1357825456'}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
  );
}