import './App.css';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage.js";
import Aboutuspage from "./components/Aboutuspage.js";
import Projectspage from "./components/Projectspage.js";
import Contactpage from "./components/Contactpage.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./components/images/waterfall.jpg";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/aboutus/" exact component={Aboutuspage}/>
      <Route path="/projects/" exact component={Projectspage}/>
      <Route path="/contact/" exact component={Contactpage}/>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
