import React from 'react';
import { createGlobalStyle } from 'styled-components';

//local imports
import Card from '../src/components/card/card';
import Header from '../src/components/header/header';
import title from '../src/assets/img/tile.jpg';
import onTopImage from '../src/assets/img/logo.png';

createGlobalStyle`
  html {
    color: #292f33;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.3125;
  }

  a {
    text-decoration: none;
  }


  @media screen and (min-width: 360px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: 16px;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card backgroundImage={title} onTopImage={onTopImage} text="Home and Away"></Card>
      {/* <Card backgroundImage={title} onTopImage={onTopImage} text="Home and Away"></Card> */}
    </div>
  );
}

export default App;
