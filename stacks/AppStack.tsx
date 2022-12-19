import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {BookFormScreen} from '~/modules/books/BookFormScreen';
import {BookSingleScreen} from '~/modules/books/BookSingleScreen';
import {BooksListScreen} from '~/modules/books/BooksListScreen';
import {Home} from '~/modules/home/Home';
import {StorybooksScreen} from '~/modules/Storybooks/StorybooksScreen';
import {Screens} from '~/stacks/Screens';

import AboutScreen from '~/modules/about/AboutScreen';
import {UserSettingsScreen} from '~/modules/user-settings/UserSettingsScreen';

import {CarsListScreen} from '~/modules/cars/CarsListScreen';
import {CarSingleScreen} from '~/modules/cars/CarSingleScreen';
import {CarFormScreen} from '~/modules/cars/CarFormScreen';

// DO_NOT_DELETE_LINE:Import

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={Screens.UserSettings}>
      <Drawer.Screen
        name={Screens.UserSettings}
        component={UserSettingsScreen}
      />
      <Drawer.Screen name={Screens.Home} component={Home} />
      <Drawer.Screen name={Screens.About} component={AboutScreen} />
      <Drawer.Screen name={Screens.BooksList} component={BooksListScreen} />
      <Drawer.Screen
        name={Screens.BookSingle}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        component={BookSingleScreen}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        name={Screens.BookForm}
        component={BookFormScreen}
      />
      <Drawer.Screen name={Screens.Storybooks} component={StorybooksScreen} />

      <Drawer.Screen name={Screens.CarsList} component={CarsListScreen} />
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        name={Screens.CarSingle}
        component={CarSingleScreen}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        name={Screens.CarForm}
        component={CarFormScreen}
      />
      {/*DO_NOT_DELETE_LINE:Screen*/}
    </Drawer.Navigator>
  );
};
