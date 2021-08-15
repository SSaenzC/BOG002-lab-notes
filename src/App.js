import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext.jsx';

// Import components
import SignUp from './components/SignUp.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

toast.configure();

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL }>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
