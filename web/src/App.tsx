import React, { Suspense, lazy } from "react";
import styled from "styled-components";
const HeaderComponent = lazy(() => import("./components/Header")
  .then(({ HeaderComponent }) => ({ default: HeaderComponent })));
const SectionComponent = lazy(() => import("./components/Section")
  .then(({ SectionComponent }) => ({ default: SectionComponent })));

const Wrapper = styled.section`
  background: #131415;
`;

function App() {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <HeaderComponent />
      <SectionComponent />
    </Wrapper>
  );
}

export default App;
