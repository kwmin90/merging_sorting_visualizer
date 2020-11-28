import React from "react";
import { MergingVisualizer } from "./components/MergingVisualizer/MergingVisualizer";
import { HashRouter, Switch, Route } from "react-router-dom";
import { SortingVisualizer } from "./components/SortingVisualizer/SortingVisualizer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={MergingVisualizer} />
          <Route exact path="/sort" component={SortingVisualizer} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
