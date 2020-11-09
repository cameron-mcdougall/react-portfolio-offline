import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-google';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    loadReCaptcha();
  }

  render() {

    return (
      <Router>
        <React.Fragment>

          <Header />
          
          <main className='content'>
            <Route exact path='/' component={Work} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </main>

          <Footer />
        </React.Fragment>
      </Router>
    );
  }

}

export default App;