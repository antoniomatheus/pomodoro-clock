import React from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { Container, Setting, Button, Label, Control, Value } from './styles';

export default function Settings() {
  return (
    <Container>
      <Setting>
        <Label>Short Break</Label>
        <Control>
          <Button>
            <FaMinus />
          </Button>
          <Value>5</Value>
          <Button>
            <FaPlus />
          </Button>
        </Control>
      </Setting>
      <Setting>
        <Label>Long Break</Label>
        <Control>
          <Button>
            <FaMinus />
          </Button>
          <Value>25</Value>
          <Button>
            <FaPlus />
          </Button>
        </Control>
      </Setting>
    </Container>
  );
}
