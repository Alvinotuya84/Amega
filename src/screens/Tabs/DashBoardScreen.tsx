import {View, Text} from 'react-native';
import React from 'react';
import Box from '@/src/components/reusables/Box';
import LinearGradientBox from '@/src/components/reusables/LinearGradientBox';
import {scale} from '@/src/constants/scaler.constants';
import {useTheme} from '@/src/hooks/useTheme.hook';
import ThemedText from '@/src/components/reusables/ThemedText';
import {ThemedSearchInput} from '@/src/components/reusables/ThemedTextInput';
import ImageWrapper from '@/src/components/reusables/ImageWrapper';

type Props = {};

const DashBoardScreen = (props: Props) => {
  const theme = useTheme();
  return (
    <Box flex={1}>
      <LinearGradientBox
        colors={[theme.primary, '#e1e2e3']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1.5}}
        height={scale(400)}
        px={scale(20)}
        py={scale(50)}
        color={theme.primary}>
        <Box direction="row" align="center" justify="space-between">
          <Box alignSelf="flex-end">
            <ThemedText color={theme.background} size={'xxxl'} weight="bold">
              IP TRACKER
            </ThemedText>
          </Box>

          <ImageWrapper
            source={require('@/assets/home/amega-home.png')}
            height={scale(100)}
            width={scale(100)}
          />
        </Box>

        <ThemedSearchInput
          wrapper={{
            my: scale(40),
            color: 'white',
            borderColor: 'transparent',
          }}
        />
      </LinearGradientBox>
    </Box>
  );
};

export default DashBoardScreen;
