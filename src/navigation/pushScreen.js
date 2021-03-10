import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
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
    Icons.getImageSource('ic-home', 30),
    Icons.getImageSource('ic-order', 30),
    Icons.getImageSource('ic-notification-1', 30),
    Icons.getImageSource('ic-user', 30),
    Icons.getImageSource('ic-library', 30),
    Icons.getImageSource('ic-menu', 25),
    Icons.getImageSource('ic-search', 25),
  ]).then(([listBook, orderHistory, notifications, user, library, menu, search]) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id: 'sideBar',
              name: 'SideBar',
            },
          },
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
                              visible: true,
                              leftButtons: [
                                {
                                  id: 'sideBar',
                                  icon: menu,
                                  fontSize: 10,
                                },
                              ],
                              rightButtons: [
                                {
                                  id: 'search',
                                  icon: search,
                                  fontSize: 10,
                                },
                              ],
                            },
                            bottomTab: {
                              icon: listBook,
                              fontSize: 30,
                              animate: false,
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
                          name: 'Orders',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            visible: false,
                            bottomTab: {
                              icon: orderHistory,
                              fontSize: 30,
                              animate: false,
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
                              fontSize: 30,
                              animate: false,
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
                              icon: notifications,
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
                          name: 'Library',
                          options: {
                            topBar: {
                              visible: false,
                            },
                            bottomTab: {
                              icon: library,
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
