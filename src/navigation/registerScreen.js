import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
// import Screen
import Intro from '../screens/Intro/Index';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Phone from '../screens/Auth/password/Phone';
import Code from '../screens/Auth/password/Code';
import Password from '../screens/Auth/password/Password';
import Home from '../screens/Home/Index';
import Field from '../screens/Field/Index';
import Room from '../screens/Room/Index';
import Profile from '../screens/Profile/Index';
import Notification from '../screens/Notification/Index';
import ListRoom from '../screens/Room/ListRoom';
import Setting from '../screens/Profile/Setting';
import ChangePassword from '../screens/Profile/setting/ChangePassword';
import Help from '../screens/Profile/setting/Help';
import Rules from '../screens/Profile/setting/Rules';
import Information from '../screens/Profile/setting/Information';
import CodeRegister from '../screens/Auth/Code';
import Detail from '../screens/Field/Detail';
import DetailRoom from '../screens/Room/DetailRoom';
function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
export function registerScreens() {
  Navigation.registerComponent(
    'DetailRoom',
    () => ReduxProvider(DetailRoom),
    () => DetailRoom,
  );
  Navigation.registerComponent(
    'Detail',
    () => ReduxProvider(Detail),
    () => Detail,
  );
  Navigation.registerComponent(
    'CodeRegister',
    () => ReduxProvider(CodeRegister),
    () => CodeRegister,
  );
  Navigation.registerComponent(
    'Intro',
    () => ReduxProvider(Intro),
    () => Intro,
  );
  Navigation.registerComponent(
    'Information',
    () => ReduxProvider(Information),
    () => Information,
  );
  Navigation.registerComponent(
    'Rules',
    () => ReduxProvider(Rules),
    () => Rules,
  );
  Navigation.registerComponent(
    'Help',
    () => ReduxProvider(Help),
    () => Help,
  );
  Navigation.registerComponent(
    'ChangePassword',
    () => ReduxProvider(ChangePassword),
    () => ChangePassword,
  );
  Navigation.registerComponent(
    'Setting',
    () => ReduxProvider(Setting),
    () => Setting,
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'Register',
    () => ReduxProvider(Register),
    () => Register,
  );
  Navigation.registerComponent(
    'Phone',
    () => ReduxProvider(Phone),
    () => Phone,
  );
  Navigation.registerComponent(
    'Code',
    () => ReduxProvider(Code),
    () => Code,
  );
  Navigation.registerComponent(
    'Password',
    () => ReduxProvider(Password),
    () => Password,
  );
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'Field',
    () => ReduxProvider(Field),
    () => Field,
  );
  Navigation.registerComponent(
    'Room',
    () => ReduxProvider(Room),
    () => Room,
  );
  Navigation.registerComponent(
    'Notification',
    () => ReduxProvider(Notification),
    () => Notification,
  );
  Navigation.registerComponent(
    'Profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );
  Navigation.registerComponent(
    'ListRoom',
    () => ReduxProvider(ListRoom),
    () => ListRoom,
  );
}
