import React from 'react';
import PropTypes from 'prop-types';

import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

import { Container, Time, Control, Button } from './styles';

export default function Clock(props) {
  const { running, currentTime, onStartPause, onStop } = props;
  return (
    <Container>
      <Time>{currentTime}</Time>
      <Control>
        <Button onClick={onStartPause}>
          {running ? <FaPause /> : <FaPlay />}
        </Button>
        <Button onClick={onStop}>
          <FaStop />
        </Button>
      </Control>
    </Container>
  );
}

Clock.propTypes = {
  running: PropTypes.bool.isRequired,
};
