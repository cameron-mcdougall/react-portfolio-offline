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
    // Call the fetch function below once the component mounts
    //this.callBackendAPI()
    //  .then(res => this.setState({ data: res.express }))
    //  .catch(err => console.log(err));
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

    loadReCaptcha();  
  }

   callApi = async () => {
    const response = await fetch('/.netlify/functions/server/api/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  //callBackendAPI = async () => {
  //  const response = await fetch('/express_backend');
  //  const body = await response.json();

  //  if (response.status !== 200) {
  //   throw Error(body.message)
  //  }
  //  return body;
  //}

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
          <p className='mail-server-status'>{this.state.data}</p>
        </React.Fragment>
      </Router>
    );
  }

}

export default App;