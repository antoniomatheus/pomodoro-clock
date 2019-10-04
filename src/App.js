import React, { Component } from 'react';

import getTime from './helpers/getTime';

import GlobalStyle from './styles/global';
import Clock from './components/Clock';
import Settings from './components/Settings';
import Summary from './components/Summary';
import { Container } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortBreak: 10,
      longBreak: 30,
      currentTime: 45 * 60,
      totalTime: 0,
      pomodorosCompleted: 0,
      running: false,
    };
  }

  componentDidMount() {}

  changeShortBreak = change => {
    const { shortBreak } = this.state;
    this.setState({
      shortBreak: shortBreak + change,
    });
  };

  changeLongBreak = change => {
    const { longBreak } = this.state;
    this.setState({
      longBreak: longBreak + change,
    });
  };

  onStartPause = () => {
    const { running } = this.state;
    // if (running) {
    // } else {
    // }
    console.log('start/pause');
  };

  onStop = () => {
    console.log('Stop');
  };

  render() {
    const {
      shortBreak,
      longBreak,
      currentTime,
      totalTime,
      running,
    } = this.state;

    return (
      <Container>
        <Settings
          changeShortBreak={this.changeShortBreak}
          changeLongBreak={this.changeLongBreak}
          shortBreak={shortBreak}
          longBreak={longBreak}
        />
        <Clock
          running={running}
          currentTime={getTime(currentTime)}
          onStartPause={this.onStartPause}
          onStop={this.onStop}
        />
        <Summary totalTime={totalTime} />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
