import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../themes/colors';
export const pushScreen = (
  componentId,
  screenApp,
  passProps,
  title,
  visible,
  visibleBottom,
  left,
  right,
) => {
  Promise.all([Icons.getImageSource(left, 25), Icons.getImageSource(right, 25)]).then(
    ([leftImage, rightImage]) => {
      Navigation.push(componentId, {
        component: {
          name: screenApp,
          id: screenApp,
          passProps: {
            data: passProps,
            title: title,
          },
          options: {
            topBar: {
              visible: visible,
              title: {
                text: title,
              },
              leftButtons: [
                {
                  id: left,
                  icon: leftImage,
                  fontSize: 10,
                  color: '#555',
                },
              ],
              rightButtons: [
                {
                  id: right,
                  icon: rightImage,
                  fontSize: 10,
                  color: '#555',
                },
              ],
            },
            bottomTabs: {
              visible: visibleBottom ? visibleBottom : false,
            },
          },
        },
      });
    },
  );
};

export const loginScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'login',
              name: 'Login',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
export const homeScreen = () => {
  Promise.all([
    Icon.getImageSource('home-outline', 30),
    Icon.getImageSource('soccer-field', 30),
    Icons.getImageSource('plus-circle', 50),
    Icon.getImageSource('bell-ring-outline', 30),
    Icons.getImageSource('user', 30),
  ]).then(([home, filed, plus, bell, user]) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          center: {
            bottomTabs: {
              id: 'BottomTabs',
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'Home',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            bottomTab: {
                              icon: home,
                              animate: false,
                              text: 'Trang chủ',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'Field',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            visible: false,
                            bottomTab: {
                              icon: filed,
                              animate: false,
                              text: 'sân bóng',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          id: 'Room',
                          name: 'Room',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            bottomTab: {
                              icon: plus,
                              text: 'Tạo trận',
                              iconColor: '#00B359',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'Notification',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            bottomTab: {
                              icon: bell,
                              text: 'Thông báo',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'Profile',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            bottomTab: {
                              icon: user,
                              text: 'Tài khoản',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
};
Navigation.setDefaultOptions({
  bottomTab: {
    textColor: Colors.txtLevel3,
    iconColor: Colors.txtLevel3,
    selectedIconColor: Colors.primary,
    selectedTextColor: Colors.primary,
    fontSize: 10,
  },
  bottomTabs: {
    visible: true,
    animate: true,
    elevation: 10,
    titleDisplayMode: 'alwaysShow',
    preferLargeIcons: true,
    animateTabSelection: false,
  },
});
export const introScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Intro',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const goBack = (idComponent) => {
  Navigation.pop(idComponent);
};
