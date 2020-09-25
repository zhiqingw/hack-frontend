import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import "./views/styles.css";
import PatientList from "./pages/PatientList";
import Login from "./pages/Login";
import Usercenter from "./pages/Usercenter";
import CommentExampleComment from "./pages/Discussion";
import PrimarySearchAppBar from "./component/searchbar";
export default function App() {
  return (
      <Router>
        <div className="App">
            <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/patientList">
               <PatientList />
            </Route>
              <Route path="/usercenter">
                  <Login />
              </Route>
              <Route path="/login">
                  <Usercenter />
              </Route>
              <Route path="/discussion">
                  <CommentExampleComment />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}
