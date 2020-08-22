import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import  MainTabs from './components/Tabs/MainTabs'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
     <Header></Header>
     <MainTabs></MainTabs>
     <Footer></Footer>
    </div>
  );
}

export default App;
