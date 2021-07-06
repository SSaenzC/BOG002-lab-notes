import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
