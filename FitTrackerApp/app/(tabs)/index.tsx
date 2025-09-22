import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

import { HomeScreen } from '../../components/HomeScreen';
import { ProfileScreen } from '../../components/ProfileScreen';
import { StatsScreen } from '../../components/StatsScreen';
import {ObjetivoProvider } from '../../context/ObjetivoContext';
import { SplashScreens } from '../../components/SplashScreens';

import { COLORES } from '../styles/AppStyles';
import * as SplashScreen from 'expo-splash-screen';
//Navegador de Tabs
const Tab = createBottomTabNavigator();



const App: React.FC = () => {
  //Definicion de los estados
  const [isloding, setIsLoading] = React.useState(true);
  const [appIsReady, setAppIsReady] = React.useState(false);

  useEffect(() => {
    //Simular carga de datos iniciales
    const prepareApp = async () => {
      try{
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }catch(e){
        console.warn(e);
      }finally{
        setAppIsReady(true);
      }
    };
    prepareApp();
  }, []);

  const onSplashFinish = () => {
    setIsLoading(false);
  }

  if (isloding || !appIsReady) {
    return <SplashScreens onfinish={onSplashFinish}/>;
  }

  return (
    <ObjetivoProvider>
      <Tab.Navigator screenOptions={{
        //Configuracion general de los tabs
        headerShown: false,
        tabBarActiveTintColor: COLORES.celeste,
        tabBarInactiveTintColor: COLORES.texto,
        tabBarStyle: {
          backgroundColor: COLORES.fondo,
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          paddingBottom : 5,
          paddingTop : 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 5,
        },
        }}
        >
          {/* Tab 1 : Home Screen */}
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ focused,color }) => (
            <Image
            source={{
             uri: focused ? 
             'https://img.icons8.com/?size=100&id=83326&format=png&color=000000' : 'https://img.icons8.com/?size=100&id=86527&format=png&color=000000'
            }}
          style={{ 
          width: 24, 
          height: 24,
          tintColor: color 
        }}
            />
          ),
        }}
        />

        {/* Tab 2: Estadisticas Screen */}
        <Tab.Screen name="Stats" component={StatsScreen}
        options={{
          tabBarLabel: 'Estadísticas',
          tabBarIcon: ({ focused,color }) => (
            <Image
            source={{
             uri: focused ? 
             'https://img.icons8.com/?size=100&id=88664&format=png&color=000000' : 'https://img.icons8.com/?size=100&id=88695&format=png&color=000000'
            }}
          style={{ 
          width: 24, 
          height: 24,
          tintColor: color 
        }}
            />
          ),
        }}
        />

        {/* Tab 3: Perfil Screen */}
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused,color }) => (
            <Image
            source={{
             uri: focused ? 
             'https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000' : 'https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000'
            }}
          style={{ 
          width: 24, 
          height: 24,
          tintColor: color 
        }}
            />
          ),
        }}
        />
        </Tab.Navigator>
        </ObjetivoProvider>
  );
};
export default App;