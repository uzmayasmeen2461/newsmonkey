import "./App.css";

import React, { Component } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import REACT_APP_NEWS_API from "./.env.local";

export default class App extends Component {
  handleClick() {
    this.forceUpdate();
  }
  state = {
    progress: 0,

    apiKey: process.env.REACT_APP_NEWS_API,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />

          <LoadingBar
            height={5}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  key="general"
                  country="in"
                  pageSize={5}
                  category="general"
                  onClick={this.handleClick.bind(this)}
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  country="in"
                  key="business"
                  pageSize={5}
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  country="in"
                  key="entertainment"
                  pageSize={5}
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  country="in"
                  key="general"
                  pageSize={5}
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  key="health"
                  country="in"
                  pageSize={5}
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  country="in"
                  key="science"
                  pageSize={5}
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  country="in"
                  key="sports"
                  pageSize={5}
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.state.apiKey}
                  setprogress={this.setProgress}
                  country="in"
                  key="technology"
                  pageSize={5}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
