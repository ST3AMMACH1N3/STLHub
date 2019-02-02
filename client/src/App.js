import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Thanks from './components/Thanks';
import Main from './pages/Main';
import Ticketing from './pages/Ticketing';
// import Checkout from './pages/Checkout';
// import Thankyou from './pages/Thankyou';
// import NoMatch from './pages/NoMatch';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/ticketing' component={Ticketing} />
          {/* <Route exact path='/checkout' component={Checkout} /> */}
          {/* <Route exact path='/thankyou' component={Thankyou} /> */}
          {/* <Route component={NoMatch}/> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
