import './assets/css/style-starter.css';

//react-router
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

//components
import Header from "./components/Header"
import Footer from "./components/Footer"

//pages-components
import Home from "./pages/Home"
import About from "./pages/About"
import Causes from "./pages/Causes";
import Gallery from "./pages/Gallery"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/causes" component={Causes}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path= "*" component={PageNotFound}/>
        </Switch>
      <Footer/>
  </Router>
  );
}

export default App;
