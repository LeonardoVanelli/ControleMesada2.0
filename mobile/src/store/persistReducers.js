import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'controlemesada',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'families'],
    },
    reducers
  );

  return persistedReducer;
};
