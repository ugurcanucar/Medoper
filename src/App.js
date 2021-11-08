import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Views from "./views";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
