import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/privacy" exact component={Privacy}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
