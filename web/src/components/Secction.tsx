import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../style/device';
import { Advocate, IAdvocate } from '../type';
import { AdovocateComponent } from './Advocates';
import { SearchComponent } from './Search';

const Section = styled.section`
    padding: 4em;
`;

const AdovecateList = styled.div`
    grid-gap: 2em;
    display: grid;
    gap: 2em;
    width: 100%;
    
  @media ${device.desktop} { 
    grid-template-columns: 1fr;
  };

  @media ${device.tablet} {
    grid-template-columns: minmax(0,1fr) minmax(0,1fr);
  };

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  };
`;
export const SectionComponent: FC = () => {
  const [adovecateList, setAdovecateList] = useState<IAdvocate | undefined>();

  useEffect(() => {
    fetch('http://localhost:8000/advocates/', {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => setAdovecateList(json));
  }, [setAdovecateList]);

  console.log(adovecateList);

  return (
    <Section>
      <SearchComponent />
      <AdovecateList>
        {
          adovecateList?.advocates.map((item: Advocate) => (
            // eslint-disable-next-line react/jsx-key
            <AdovocateComponent />
          ))
        }
      </AdovecateList>
    </Section>
  )
}