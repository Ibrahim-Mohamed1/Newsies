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
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;