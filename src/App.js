import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/mainpages/HomePage';
import Weddings from './components/mainpages/Weddings';
import Services from './components/mainpages/Services';
import Contact from './components/mainpages/Contact';
import AboutMe from './components/mainpages/AboutMe';
import AlyssaAndRyne from './components/Weddings/AlyssaAndRyne';
import KarleyAndChris from './components/Weddings/KarleyAndChris';
import HannahAndBen from './components/Weddings/HannahAndBen';
import JanieAndHarold from './components/Weddings/JanieAndHarold';
import RobynAndKelly from './components/Weddings/RobynAndKelly';
import KatieAndBrett from './components/Weddings/KatieAndBrett';
import MeganAndJustin from './components/Weddings/MeganAndJustin';
import WhitneyAndJames from './components/Weddings/WhitneyAndJames';
import CoriAndJesse from './components/Weddings/CoriAndJesse';
import WeddingService from './components/mainpages/services/WeddingService';
import EventService from './components/mainpages/services/EventService';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/weddingPlannerSite">
        <div>
          <Route path="/" exact component={HomePage} />

          <Route path="/Weddings" exact component={Weddings} />

          <Route path="/Services" exact component={Services} />

          <Route path="/AboutMe" exact component={AboutMe} />

          <Route path="/Contact" exact component={Contact} />

          <Route path="/AlyssaAndRyne" exact component={AlyssaAndRyne} />

          <Route path="/KarleyAndChris" exact component={KarleyAndChris} />
          <Route path="/HannahAndBen" exact component={HannahAndBen} />

          <Route path="/JanieAndHarold" exact component={JanieAndHarold} />
          <Route path="/KatieAndBrett" exact component={KatieAndBrett} />

          <Route path="/MeganAndJustin" exact component={MeganAndJustin} />
          <Route path="/RobynAndKelly" exact component={RobynAndKelly} />

          <Route path="/CoriAndJesse" exact component={CoriAndJesse} />

          <Route path="/WhitneyAndJames" exact component={WhitneyAndJames} />

          <Route
            path="/services/WeddingService"
            exact
            component={WeddingService}
          />

          <Route path="/Services/EventService" component={EventService} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
