import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {BookFormScreen} from '~/src/modules/books/BookFormScreen';
import {BookSingleScreen} from '~/src/modules/books/BookSingleScreen';
import {BooksListScreen} from '~/src/modules/books/BooksListScreen';
import {Home} from '~/src/modules/home/Home';
import {StorybooksScreen} from '~/src/modules/Storybooks/StorybooksScreen';
import {Screens} from '~/src/stacks/Screens';

import AboutScreen from '~/src/modules/about/AboutScreen';
import {UserSettingsScreen} from '~/src/modules/user-settings/UserSettingsScreen';

import {CarsListScreen} from '~/src/modules/cars/CarsListScreen';
import {CarSingleScreen} from '~/src/modules/cars/CarSingleScreen';
import {CarFormScreen} from '~/src/modules/cars/CarFormScreen';

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
