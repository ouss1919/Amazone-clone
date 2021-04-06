import './App.css';
import Header from './Header';
import Home from './Home';
import Payement from './Payement';
import React, {useEffect} from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Orders from './Orders';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser){
        dispatch({
          type : 'SET_USER',
          auth : authUser
        })
      }else{
        dispatch({
          type : 'SET_USER',
          auth : null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payement">
            <Header />
              <Payement />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
