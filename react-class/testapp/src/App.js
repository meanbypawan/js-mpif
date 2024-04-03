import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
class App extends Component{
   render(){
    return <div>
      <Header/>
      <Navigation/>
      <MainContent/>
      <Footer/>
    </div>
   }
}
export default App;
