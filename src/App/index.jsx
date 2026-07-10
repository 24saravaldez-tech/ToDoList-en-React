import React, { useState } from 'react'
import { AppUI } from './AppIU';
import { TodoProvider } from '../TodoContent';
import './app.css'

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export { App }
