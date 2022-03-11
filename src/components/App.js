import React from "react";
import CardSpreadControl from "./CardSpreadControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./Header";
import CardControl from "./CardControl";
import CategoryControl from "./CategoryControl";
import Navbar from "./Navbar";
import Wands from "./Wands";
import Cups from "./Cups";
import Swords from "./Swords";
import Pentacles from "./Pentacles";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/wands">
          <Wands />
        </Route>
        <Route path="/cups">
          <Cups />
        </Route>
        <Route path="/swords">
          <Swords />
        </Route>
        <Route path="/pentacles">
          <Pentacles />
        </Route>
        <Route path="/categories">
          <CategoryControl />
        </Route>
        <Route path="/card-spread">
          <CardSpreadControl />
        </Route>
        <Route path="/">
          <CardControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
