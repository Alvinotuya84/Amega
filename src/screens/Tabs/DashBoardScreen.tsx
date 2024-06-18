import {View, Text, Alert} from 'react-native';
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
import Spacer from '@/src/components/reusables/Spacer';
import SettingsStore from '@/src/app/store2';
import {useToast} from '@/src/components/toast-manager';

type Props = {};

const DashBoardScreen = (props: Props) => {
  const theme = useTheme();
  const toast = useToast();
  const [ip, setIp] = React.useState<string>('');
  const {setUserIpDetails, userIpDetails} = SettingsStore();
  const {
    data: ipData,
    error,
    isLoading: isIpLoading,
    refetch,
  } = useQuery({
    queryKey: ['ip'],
    queryFn: async () => {
      const response = await fetchJson<IpLocationResponse>(
        `https://ipwho.is/${ip}`,
      );
      toast.showToast({
        type: 'success',
        title: 'IP Address fetched successfully',
      });
      setUserIpDetails({
        ...response,
        image: require('@/assets/slider/slider_one.png'),
      });
      return response;
    },
  });
  return (
    <Box flex={1}>
      <LinearGradientBox
        colors={[theme.primary, theme.background]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        height={scale(170)}
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
      </LinearGradientBox>
      <Box px={scale(20)} height={scale(200)} color={theme.primary}>
        <Box mb={scale(30)} align="center" width={'100%'} direction="row">
          <ThemedSearchInput
            onChangeText={setIp}
            value={ip}
            wrapper={{
              width: sWidth - scale(100),
              color: 'white',
              borderColor: 'transparent',
            }}
          />
          <Spacer width={scale(10)} />
          <ThemedButton
            color={theme.background}
            icon={{
              name: 'search',
              color: theme.primary,
              size: 'xxs',
              source: 'Feather',
            }}
            loading={isIpLoading}
            onPress={() => {
              if (ip.length <= 0) {
                toast.showToast({
                  type: 'error',
                  title: 'Please enter an IP Address',
                });
                return false;
              }
              refetch();
            }}
            width={scale(60)}
            height={scale(60)}
            radius={scale(10)}
            size={'lg'}
          />
        </Box>

        <Box
          width={'100%'}
          borderWidth={1}
          direction="row"
          justify="space-between"
          borderColor={theme.background}
          radius={scale(10)}
          pa={scale(10)}
          height={scale(70)}>
          <Box height={'100%'} justify="space-between">
            <ThemedText color={theme.background} size={'sm'} weight="bold">
              IP Address :
            </ThemedText>
            <ThemedText color={theme.background} size={'xs'}>
              {ipData?.ip}
            </ThemedText>
          </Box>
          <Box height={'100%'} justify="space-between">
            <ThemedText color={theme.background} size={'sm'} weight="bold">
              Location :
            </ThemedText>
            <ThemedText color={theme.background} size={'xs'}>
              {ipData?.city}
              {', '}
              {ipData?.country}
            </ThemedText>
          </Box>
          <Box height={'100%'} justify="space-between">
            <ThemedText color={theme.background} size={'sm'} weight="bold">
              Timezone :
            </ThemedText>
            <ThemedText color={theme.background} size={'xs'}>
              {ipData?.timezone.abbr} +{ipData?.timezone.utc}
            </ThemedText>
          </Box>
          <Box height={'100%'} justify="space-between">
            <ThemedText color={theme.background} size={'sm'} weight="bold">
              ISP :
            </ThemedText>
            <ThemedText color={theme.background} size={'xxxs'}>
              {ipData?.connection.org}
            </ThemedText>
          </Box>
        </Box>
      </Box>
      <Box
        flex={1}
        radiusTop={scale(20)}
        mt={scale(-10)}
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
