import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  // Rotas das paginas
  createStackNavigator(
    {
      // Tipo de configuraçao de rotas
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center', // por padrao Android alinha pela esquerda
      headerBackTitleVisible: false, // flecha de voltar do IOS
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
