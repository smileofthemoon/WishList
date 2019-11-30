import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import wishListState from "./components/WishList/reducer";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AdminWishList from "./components/AdminWishList";

const rootReducer = combineReducers({
  wishListState
});
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/admin/twoja-lista">
            <AdminWishList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
