import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {IpLocationResponse} from '../types/locationinfo';

type ThemeType = 'light' | 'dark' | 'system';

interface SettingsStoreType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  userIpDetails: IpLocationResponse | null;
  setUserIpDetails: (details: IpLocationResponse) => void;
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
