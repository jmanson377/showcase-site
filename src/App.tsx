import type { Component } from 'solid-js';
import NavigationBar from './components/NavigationBar';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class="bg-slate-600 w-50 h-500">
      <NavigationBar/>
    </div>
  );
};

export default App;
