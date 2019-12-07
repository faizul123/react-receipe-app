import React, { Fragment, Component } from 'react';
import MainContainer from './components/Layout/MainContainer';
import { CssBaseline, Snackbar } from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {

  state = {
    displaySnackBar: false,
    snakebarMessage: null
  }

  notifyUser = (displaySnackBar, snakebarMessage) => {
    this.setState({
      snakebarMessage: snakebarMessage,
      displaySnackBar: displaySnackBar
    })
  }

  render() {
    console.log("From app.js ",this.props);
    return (
      <Fragment>
        <BrowserRouter>
          <CssBaseline />
          <MainContainer notifyUser={this.notifyUser} />
          <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            autoHideDuration={3000}
            open={this.state.displaySnackBar}
            message={this.state.snakebarMessage}
            onClose={() => this.setState({ displaySnackBar: false, snakebarMessage: '' })}
          />
          </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;