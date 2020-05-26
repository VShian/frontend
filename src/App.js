import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "antd/dist/antd.css";

import CustomLayout from "./CustomLayout"
import Items from "./components/Items";
import Graph from "./components/Graph";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/upload" component={Upload} />
          <Route path="/graph/:id" component={Graph} />
        </Switch>
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
