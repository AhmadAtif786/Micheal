import "./App.css";
import { Container } from "@mui/material";
import Banner from "./component/Banner/Banner";
import Header from "./component/Header/Header";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Home from "./Home";
import Navtop from "./Navtop";
function App() {
  return (
    <>
      <Navtop />
      <Home />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Banner />
    </>
  );
}

export default App;
