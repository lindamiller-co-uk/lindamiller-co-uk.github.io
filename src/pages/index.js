import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Magic from "./Magic/Magic.jsx";
import Cartooning from "./Cartooning/Cartooning.jsx";
import Milagros from "./Milagros/Milagros.jsx";
import Comedy from "./Comedy/Comedy.jsx";
import Music from "./Music/Music.jsx";
import Poetry from "./Poetry/Poetry.jsx";
import SharedReading from "./SharedReading/SharedReading.jsx";
import BodyWork from "./BodyWork/BodyWork.jsx";
import CoachSupervision from "./CoachSupervision/CoachSupervision.jsx";
import MedicalEducator from "./MedicalEducator/MedicalEducator.jsx";
import Coaching from "./Coaching/Coaching.jsx";


let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/" component={LandingPage} />
      <Route path="/magic" component={Magic} />
      <Route path="/Cartooning" component={Cartooning} />
      <Route path="/Milagros" component={Milagros} />
      <Route path="/Comedy" component={Comedy} />
      <Route path="/Music" component={Music} />
      <Route path="/Poetry" component={Poetry} />
      <Route path="/SharedReading" component={SharedReading} />
      <Route path="/BodyWork" component={BodyWork} />
      <Route path="/CoachSupervision" component={CoachSupervision} />
      <Route path="/MedicalEducator" component={MedicalEducator} />
      <Route path="/Coaching" component={Coaching} />
    </Switch>
  </Router>
);
