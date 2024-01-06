// src/App.js
import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles.css'; // Import the CSS file

function App() {
  const handleTaskCreated = (newTask) => {
    // You can update the task list state here or trigger a re-fetch
    console.log('New task created:', newTask);
  };

  return (
    <div>
      <h1>CRUD React App</h1>
      <TaskList />
      <TaskForm onTaskCreated={handleTaskCreated} />
    </div>
  );
}

export default App;
