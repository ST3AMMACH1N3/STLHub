import React, { Component } from 'react';
import Footer from './components/Footer';
import Main from './pages/Main';
import Ticketing from './pages/Ticketing';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
// import Checkout from './pages/Checkout';
// import Thankyou from './pages/Thankyou';
import NoMatch from './pages/NoMatch';
import API from './utils/API';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          credentials: null
        }
    }

    componentDidMount = () => {
        this.getCredentials();
    }

    getCredentials = () => {
        API
            .getCredentials()
            .then(response => {
                console.log(response);
                if (response.data.name) {
                    this.setState({ credentials: response.data }, (err, newState) => console.log(newState));
                }
            })
            .catch(err => console.log(err));
    }

    logout = () => {
        API
            .logout()
            .then(response => {
                this.setState({credentials: null});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Router>
                <div>
                    <Header credentials={this.state.credentials} handleLogout={this.logout} />
                    <Switch>
                        <Route exact path='/' render={(...args) => <Main credentials={this.state.credentials} {...args} />} />
                        <Route exact path='/ticketing' render={(...args) => <Ticketing credentials={this.state.credentials} {...args}  />} />
                        <Route exact path='/admin' render={(...args) => <Admin credentials={this.state.credentials} {...args} />} />
                        <Route exact path='/login' render={(...args) => <Login credentials={this.state.credentials} handleLogin={this.getCredentials} {...args} />} />
                        <Route exact path='/register' render={(...args) => <Register credentials={this.state.credentials} {...args} />} />
                        <Route exact path='/about' render={(...args) => <About credentials={this.state.credentials} {...args} />} />
                        {/* <Route exact path='/checkout' component={Checkout} /> */}
                        {/* <Route exact path='/thankyou' component={Thankyou} /> */}
                        <Route component={NoMatch}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
};

export default App;
