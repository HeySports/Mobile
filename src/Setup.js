import { Navigation } from 'react-native-navigation';
import { registerScreens } from './navigation/registerScreen';
import { userStartApp, goToIntro } from './redux/AppRedux/actions';
import store from './redux/store';
import AsyncStorage from '@react-native-community/async-storage';
import setupFirebase from '../setupFirebase';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
  });
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      await registerScreens();
      const skip = await AsyncStorage.getItem('skip');
      if (JSON.parse(skip)) {
        await store.dispatch(userStartApp());
      } else {
        await store.dispatch(goToIntro());
      }
    } catch (error) {
      console.log('Init unsuccessful', error.message);
    }
  });
};

export default App;
