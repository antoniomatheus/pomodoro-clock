import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { Container, Setting, Button, Label, Control, Value } from './styles';

export default function Settings(props) {
  const { changeShortBreak, changeLongBreak, shortBreak, longBreak } = props;
  return (
    <Container>
      <Setting>
        <Label>Short Break</Label>
        <Control>
          <Button onClick={() => changeShortBreak(-1)}>
            <FaMinus />
          </Button>
          <Value>{shortBreak}</Value>
          <Button onClick={() => changeShortBreak(1)}>
            <FaPlus />
          </Button>
        </Control>
      </Setting>
      <Setting>
        <Label>Long Break</Label>
        <Control>
          <Button onClick={() => changeLongBreak(-1)}>
            <FaMinus />
          </Button>
          <Value>{longBreak}</Value>
          <Button onClick={() => changeLongBreak(1)}>
            <FaPlus />
          </Button>
        </Control>
      </Setting>
    </Container>
  );
}

Settings.propTypes = {
  changeShortBreak: PropTypes.func.isRequired,
  changeLongBreak: PropTypes.func.isRequired,
};
