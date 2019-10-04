import React from 'react';
import PropTypes from 'prop-types';

import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

import { Container, Time, Control, Button } from './styles';

export default function Clock({ running }) {
  return (
    <Container>
      <Time>25:00</Time>
      <Control>
        <Button>{running ? <FaPause /> : <FaPlay />}</Button>
        <Button>
          <FaStop />
        </Button>
      </Control>
    </Container>
  );
}

Clock.propTypes = {
  running: PropTypes.bool.isRequired,
};
