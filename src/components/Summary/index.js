import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Value } from './styles';

export default function Summary({ totalTime }) {
  return (
    <Container>
      <Label>Total Time:</Label>
      <Value>{totalTime}</Value>
    </Container>
  );
}

Summary.propTypes = {};
