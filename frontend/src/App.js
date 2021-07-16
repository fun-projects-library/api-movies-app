import "./App.css";
import { Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import NewMoviePage from "./components/pages/NewMoviePage";
import Footer from "./components/Footer";
import Header from "./components/Header"
import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {Container} from "semantic-ui-react";


class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  
  render() {
    
    return (
      <div>
        
        <Header />
        <Container text>
        <h2>My WEBSITE</h2>
          <Route path="/movies" exact component={MoviesPage}></Route>
          <Route path="/movies/new" exact component={NewMoviePage}></Route>
        </Container>
        <Footer />
        
      </div>
    );
  }
}
export default App;
