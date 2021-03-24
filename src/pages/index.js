import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import Magic from "./Magic/Magic.jsx";
import GraphicMedicine from "./GraphicMedicine/GraphicMedicine.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/" component={LandingPage} />
      <Route path="/magic" component={Magic} />
      <Route path="/GraphicMedicine" component={GraphicMedicine} />
    </Switch>
  </Router>
);
