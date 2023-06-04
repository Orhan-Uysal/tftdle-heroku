import React, { Component } from 'react';
import './App.css';
import ChampionList from './ChampionList';
import { Fade, Box } from '@mui/material';
import background from "./img/tft-wp.jpg";
import logo from "./img/tftdlelogo.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyModal from './MyModal';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }


  render() {
    return (
      <div>
        <div style={{
          position: "fixed",
          top: "0",
          left: "0",
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
        }}>
        </div>
        <div className='App'
          style={{
            position: "relative"
          }}>
          <ChampionList></ChampionList>
        </div>
        <div style={{ position: "relative", margin:"10px"}}>
          <MyModal></MyModal>
        </div>
      </div>
    );
  }
}
export default App;

