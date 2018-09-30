import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";
import store from "./store";

function App() {
  return (
    <div className="App">
      <h1>react redux test</h1>
      <UserDetails />
      <UserForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
