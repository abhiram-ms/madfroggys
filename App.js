import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Register from './src/view/authentication/register';
import StudentDetails from './src/view/authentication/student-details';
import Otp from './src/view/authentication/otp_page';
import SelectSchool from "./src/view/authentication/select_school";
import AppTour from "./src/view/pages/app_tour";
import Home from "./src/view/pages/Home";
import CourseDetails from "./src/view/pages/CourseDetails";
import Chapter from "./src/view/pages/Chapter";
import VideoPage from "./src/view/pages/VideoPage";
import Profile from "./src/view/pages/Profile";
import BottomTab from "./src/view/pages/BottomTab";

const Stack = createStackNavigator();

export default function App(){
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
          <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}/>
          <Stack.Screen name="StudentDetails" component={StudentDetails} options={{headerShown:false}}/>
          <Stack.Screen name="SelectSchool" component={SelectSchool} options={{headerShown:false}}/>
          <Stack.Screen name="AppTour" component={AppTour} options={{headerShown:false}}/>
          <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
          <Stack.Screen name="CourseDetails" component={CourseDetails} options={{headerShown:false}}/>
          <Stack.Screen name="Chapter" component={Chapter} options={{headerShown:false}}/>
          <Stack.Screen name="VideoPage" component={VideoPage} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


