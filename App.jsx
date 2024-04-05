import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.includes(taskText)) return; // Prevent adding empty or duplicate tasks
    setTasks([...tasks, taskText]);
  };

  return (
    <NavigationContainer>
      <SafeAreaView>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </SafeAreaView>

    </NavigationContainer>
    
  );
}

export default App;
