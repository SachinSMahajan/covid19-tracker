import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import  MainTabs from './components/Tabs/MainTabs'
function App() {
  return (
    <div className="App">
     <Header></Header>
     <MainTabs></MainTabs>
    </div>
  );
}

export default App;
