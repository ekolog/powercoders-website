import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./components/Homepage.js";
import Aboutuspage from "./components/Aboutuspage.js";
import Projectspage from "./components/Projectspage.js";
import Contactpage from "./components/Contactpage.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import "./components/images/waterfall.jpg";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Homepage}/>
      <Route path="/aboutus/" component={Aboutuspage}/>
      <Route path="/projects/" component={Projectspage}/>
      <Route path="/contact/" component={Contactpage}/>
      <Footer />
    </Router>
  );
}

export default App;
