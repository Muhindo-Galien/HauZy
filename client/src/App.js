import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <div className="App">
          React app

          <Switch>
          <Route exact path="/Login" components={LoginScreen}/>
          <Route exact path="/register" components={RegisterScreen}/>
          <Route exact path="/forgotpassword" components={ForgotPasswordScreen}/>
          <Route exact path="/passwordreset/:resetToken" components={ResetPasswordScreen}/>
        </Switch>
        </div>
    </Router>

  )}
