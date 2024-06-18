import {View, Text} from 'react-native';
import React from 'react';
import Page from '@/src/components/reusables/Page';
import Box, {ShadowBox} from '@/src/components/reusables/Box';
import {scale} from '@/src/constants/scaler.constants';
import {useTheme} from '@/src/hooks/useTheme.hook';
import ThemedText from '@/src/components/reusables/ThemedText';
import LinearGradientBox from '@/src/components/reusables/LinearGradientBox';
import ImageWrapper from '@/src/components/reusables/ImageWrapper';
import {ThemedSearchInput} from '@/src/components/reusables/ThemedTextInput';

type Props = {};

const MarketDataScreen = (props: Props) => {
  const theme = useTheme();
  return <Page></Page>;
};

export default MarketDataScreen;
