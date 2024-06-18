import {View, Text} from 'react-native';
import React from 'react';
import Box from '@/src/components/reusables/Box';
import LinearGradientBox from '@/src/components/reusables/LinearGradientBox';
import {scale} from '@/src/constants/scaler.constants';
import {useTheme} from '@/src/hooks/useTheme.hook';
import ThemedText from '@/src/components/reusables/ThemedText';
import {ThemedSearchInput} from '@/src/components/reusables/ThemedTextInput';
import ImageWrapper from '@/src/components/reusables/ImageWrapper';
import ImageSlider from '@/src/components/reusables/ImagesSlider';
import {useQuery} from '@tanstack/react-query';
import {fetchJson} from '@/src/utils/fetch.utils';
import {IpLocationResponse} from '@/src/types/locationinfo';
import ThemedButton from '@/src/components/reusables/ThemedButton';
import ThemedIcon from '@/src/components/reusables/ThemedIcon';
import {sWidth} from '@/src/constants/dimensions.constants';

type Props = {};

const DashBoardScreen = (props: Props) => {
  const theme = useTheme();

  const {
    data: ipData,
    error,
    isLoading: isIpLoading,
  } = useQuery({
    queryKey: ['ip'],
    queryFn: async () => {
      const response = await fetchJson<IpLocationResponse>('https://ipwho.is');
      return response;
    },
  });
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

        <Box my={scale(30)} align="center" width={'100%'} direction="row">
          <ThemedSearchInput
            wrapper={{
              width: sWidth - scale(100),
              color: 'white',
              borderColor: 'transparent',
            }}
          />
          <Box position="absolute" left={sWidth - scale(100)}>
            <ThemedButton
              icon={{
                name: 'search',
                color: theme.background,
                size: 'xxs',
                source: 'Feather',
              }}
              width={scale(60)}
              height={scale(60)}
              radius={scale(10)}
              size={'lg'}
            />
          </Box>
        </Box>

        <Box
          width={'100%'}
          borderWidth={1}
          direction="row"
          borderColor={theme.background}
          radius={scale(10)}
          pa={scale(10)}
          height={scale(70)}>
          <Box>
            <ThemedText color={theme.background} size={'sm'} weight="bold">
              IP Address :
            </ThemedText>
          </Box>
        </Box>
      </LinearGradientBox>
      <Box
        flex={1}
        radiusTop={scale(20)}
        mt={scale(-40)}
        py={scale(20)}
        color={theme.background}>
        <Box px={scale(10)}>
          <ThemedText color={theme.primary} size={'xxl'} weight="bold">
            My Gallery
          </ThemedText>
        </Box>

        <Box width={'100%'}>
          <ImageSlider
            onSelecteImage={selectedImage => console.log(selectedImage)}
            images={[
              require('@/assets/slider/slider_one.png'),

              require('@/assets/slider/slider_one.png'),
              require('@/assets/slider/slider_one.png'),
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoardScreen;
