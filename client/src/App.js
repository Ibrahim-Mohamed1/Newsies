import React from 'react';
import SignUp from "./SignUp"
import Login from "./Login"
import Home from "./Home"
import News from "./News"
import Footer from "./Footer"
import { Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/news" component={News} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;