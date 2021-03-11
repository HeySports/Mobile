import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export const pushScreen = (componentId, screenApp, passProps, title, visible, left, right) => {
  Promise.all([Icons.getImageSource(left, 25), Icons.getImageSource(right, 25)]).then(
    ([leftImage, rightImage]) => {
      Navigation.push(componentId, {
        component: {
          name: screenApp,
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
    Icons.getImageSource('home', 30),
    Icon.getImageSource('soccer-field', 30),
    Icons.getImageSource('plus-circle', 50),
    Icons.getImageSource('bell', 30),
    Icons.getImageSource('user', 30),
  ]).then(([home, filed, plus, bell, user]) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          center: {
            bottomTabs: {
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
                              selectedIconColor: '#FF7F27',
                              selectedTextColor: '#FF7F27',
                              iconColor: '#C5C0C0',
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
                              fontSize: 30,
                              animate: false,
                              text: 'sân bóng',
                              selectedIconColor: '#FF7F27',
                              selectedTextColor: '#FF7F27',
                              iconColor: '#C5C0C0',
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
                          name: 'Room',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            bottomTab: {
                              icon: plus,
                              animate: false,
                              text: 'Tạo trận',
                              selectedIconColor: '#FF7F27',
                              selectedTextColor: '#FF7F27',
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
                              selectedIconColor: '#FF7F27',
                              selectedTextColor: '#FF7F27',
                              iconColor: '#C5C0C0',
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
                              selectedIconColor: '#FF7F27',
                              selectedTextColor: '#FF7F27',
                              iconColor: '#C5C0C0',
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
