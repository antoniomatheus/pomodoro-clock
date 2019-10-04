import React from 'react';

import GlobalStyle from './styles/global';
import Clock from './components/Clock';
import Settings from './components/Settings';
import Summary from './components/Summary';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <Settings />
      <Clock running={false} />
      <Summary />
      <GlobalStyle />
    </Container>
  );
}

export default App;
