import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}></Route>
          <Route
            exact
            path="/services"
            component={() => <div>Services</div>}
          ></Route>
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          ></Route>
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          ></Route>
          <Route
            exact
            path="/websites"
            component={() => <div>Websites</div>}
          ></Route>
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          ></Route>
          <Route
            exact
            path="/about"
            component={() => <div>About Us</div>}
          ></Route>
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          ></Route>
          <Route
            exact
            path="/estimate"
            component={() => <div>fix Estimate</div>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
