import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.includes(taskText)) return; // Prevent adding empty or duplicate tasks
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <TodoList tasks={tasks} />
      <TodoForm addTask={addTask}/>
    </SafeAreaView>
  );
}

export default App;
