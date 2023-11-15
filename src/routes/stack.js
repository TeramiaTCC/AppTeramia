import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, useLinkProps } from '@react-navigation/stack';

import Icon from '../components/Icons/icons';
import { Icons } from '../components/Icons/icons';
import Colors from '../components/Colors/Colors';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Psicoup from '../pages/Psicoup';
import TabBar from './tabbar';
import Password from '../pages/Password';
import NewPet from '../pages/NewPet';
import PetDetails from '../pages/PetDetails';
import NewPost from '../pages/NewPost';
import CameraP from '../pages/Camera';
import EditUser from '../pages/EditUser';
import EditPet from '../pages/EditPet';
import Activity from '../pages/Activity';
import PsicoPrf from '../pages/PsicoPrf';

const StackR = [
  { route: 'Signin', title: 'Entrar', component: Signin, color: Colors.white, bckgClr: Colors.backColor },
  { route: 'Signup', title: 'Cadastro', type: Icons.Feather, icon: 'arrow-left-circle', component: Signup, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  { route: 'SignupPsico', title: 'Cadastro', type: Icons.Feather, icon: 'arrow-left-circle', component: Psicoup, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  { route: 'Password', title: 'Esqueci minha senha', type: Icons.Feather, icon: 'arrow-left-circle', component: Password, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  { route: 'NewPet', title: 'TeraPet', type: Icons.Feather, icon: 'x-circle', component: NewPet, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  { route: 'PetDetails', title: 'Nome do Pet*', type: Icons.Feather, icon: 'arrow-left-circle', component: PetDetails, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  { route: 'NewPost', title: 'Criar Publicação', type: Icons.Feather, icon: 'x-circle', component: NewPost, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  { route: 'Rotation',  component: TabBar, hdrOpt: false },
  {route: 'EditUser', title: 'Editar Perfil', type: Icons.Feather, icon: 'arrow-left-circle', component: EditUser, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  {route: 'EditPet', title: 'Editar TeraPet', type: Icons.Feather, icon: 'x-circle', component: EditPet, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  { route: 'Camera', hdrOpt: false, component: CameraP, },
  {route: 'Activity', title: 'Atividades', type: Icons.Feather, icon: 'arrow-left-circle', component: Activity, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
  {route: 'Psicologo', title: 'Psicólogo', type: Icons.Feather, icon: 'arrow-left-circle', component: PsicoPrf, color: Colors.white, bckgClr: Colors.backColor, mrgRgt: -20 },
];

const Stack = createStackNavigator();

export default function StackNav () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>

      {StackR.map((item) => {
        return (
          <Stack.Screen
          name={item.route}
          component={item.component}
          options={{
            headerShown: item.hdrOpt,
            title: item.title, 
            headerTintColor: item.color,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: item.bckgClr
            },
            headerBackImage: () => (
              <Icon type={item.type} name={item.icon} color={Colors.white} />
            ),
            headerLeftContainerStyle: {
              marginRight: item.mrgRgt
            }
          }}
        />
        )
      }
      )} 
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
