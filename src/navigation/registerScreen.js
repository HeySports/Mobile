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
function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
export function registerScreens() {
  Navigation.registerComponent(
    'Intro',
    () => ReduxProvider(Intro),
    () => Intro,
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
}
