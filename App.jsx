/**
 * My To Do List App
 *
 * @format
 */
import { useState } from 'react';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  SafeAreaView,
} from 'react-native';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <SafeAreaView>
      <TodoList tasks={tasks} />
      <TodoForm/>

    </SafeAreaView>
       

  );
}

export default App;
