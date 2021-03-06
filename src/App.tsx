import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// components
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ContactBar } from "./components/ContactBar/ContactBar";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ContactBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
