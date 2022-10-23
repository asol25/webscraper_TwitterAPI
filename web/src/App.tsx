import React from 'react';
import styled from 'styled-components';
import { HeaderComponent } from './components/Header';
import { SectionComponent } from './components/Secction';

const Wrapper = styled.section`
  background: #131415;
`;

function App() {
  return (
    <Wrapper>
      <HeaderComponent />
      <SectionComponent />
    </Wrapper>
  );
}

export default App;
