import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {IpLocationResponse} from '../types/locationinfo';
import {Source} from 'react-native-fast-image';

type ThemeType = 'light' | 'dark' | 'system';
interface UserIpDetailsType extends IpLocationResponse {
  image: Source;
}
interface SettingsStoreType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  userIpDetails: IpLocationResponse | null;
  setUserIpDetails: (details: UserIpDetailsType) => void;
}

const SettingsStore = create(
  persist<SettingsStoreType>(
    (set, get) => ({
      theme: 'system',
      setTheme: theme => set({theme}),
      userIpDetails: null,
      setUserIpDetails: details => set({userIpDetails: details}),
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default SettingsStore;
