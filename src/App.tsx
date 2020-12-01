import React from "react";
import { MergingVisualizer } from "./components/MergingVisualizer/MergingVisualizer";
import { HashRouter, Switch, Route } from "react-router-dom";
import { QuickSort } from "./components/SortingVisualizer/QuickSort";
import { MergeSort } from "./components/SortingVisualizer/MergeSort";
import { Header } from "./components/Header/Header";
import { InsertionSort } from "./components/SortingVisualizer/InsertionSort";
import { RadixSort } from "./components/SortingVisualizer/RadixSort";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={QuickSort} />
          <Route exact path="/quicksort" component={QuickSort} />
          <Route exact path="/mergesort" component={MergeSort} />
          <Route exact path="/insertsort" component={InsertionSort} />
          <Route exact path="/radixsort" component={RadixSort} />
          <Route exact path="/merge" component={MergingVisualizer} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
