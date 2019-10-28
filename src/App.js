import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes';
import Random from "./components/Random"

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render () {
  return (
    <div>
      <Header />
      {/* <Random /> */}
      {routes}
      <Footer />
    </div>
  
  )

  } 
}

export default App;
