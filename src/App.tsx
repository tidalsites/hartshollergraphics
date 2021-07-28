import { FC } from "react";
import "./App.scss";

// components
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ContactBar } from "./components/ContactBar/ContactBar";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <ContactBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
