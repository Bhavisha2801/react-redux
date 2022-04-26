import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import TodoInput from './Components/Todo/TodoInput';
import TodoItem from './Components/Todo/TodoItem';
import TodoList from './Components/Todo/TodoList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoInput />} />
        <Route path="/todos" element={<TodoList />} />
        {/* <Route path='/todo/:tid' element={<TodoItem />} /> */}

        <Route path='/todos/:id' element={<TodoItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
