import React, { Component, Fragment } from 'react';
import { ImgSection } from './components/ImgSection/imgStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Fare from './components/Fare';
import Drink from './components/Drink';
import Bottom from './components/Bottom';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <About />
        <Fare />
        <Drink />
        <ImgSection />
        <Bottom />
      </Fragment>
    );
  }
}

export default App;
