import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Início',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#770099',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 23,
          fontWeight: 'bold'
        }
      }}/>
      <MainStack.Screen name='About' component={AboutScreen} options={
        ({route})=>({
          title: route.params?.name,
          
        })
      }/>
    </MainStack.Navigator>
  )
}