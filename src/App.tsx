import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {QueryClient, QueryClientProvider} from 'react-query';
import colors from './constants/colors';
import {AuthStack} from './stacks/AuthStack';
import {AppDrawer} from './stacks/AppStack';
import {Modal, ModalInterchange} from './components/modal/Modal';
import {useRxjs} from './hooks/useRxjs';
import {getSession, setSession} from './helpers/token';
import {ThemeProvider} from './hooks/useTheme';

const Root = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  const [data] = useRxjs(ModalInterchange);
  const restoreSession = async () => {
    const session = await getSession();

    if (session) {
      setSession(session);
    }
  };

  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.primaryColor}}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Root.Navigator initialRouteName="app">
              <Root.Screen
                name="app"
                component={AppDrawer}
                options={{headerShown: false}}
              />
              <Root.Screen
                name="auth"
                component={AuthStack}
                options={{headerShown: false}}
              />
            </Root.Navigator>
          </NavigationContainer>
          {data && (
            <Modal
              Body={data.Component}
              isVisible={data?.visible || false}
              onClose={() => {
                ModalInterchange.next({visible: false});
              }}
              data={data.data}
              title={data.title || ''}
            />
          )}
        </QueryClientProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
