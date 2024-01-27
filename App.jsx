/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  SafeAreaView,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
        <TodoList/> 
       <TodoForm/>  
    </SafeAreaView>
  );
}
export default App;
