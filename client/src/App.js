import React from 'react';
import SignUp from "./Auth/SignUp"
import Login from "./Auth/Login"
import Home from "./Home"
import News from "./News"
import Footer from "./Footer"
import ProtectedRoute from "./Auth/ProtectedRoute";
import { Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/news" component={News} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;