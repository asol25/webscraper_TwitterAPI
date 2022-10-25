import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../style/device';
import { Advocate, IAdvocate } from '../type';
import { AdovocateComponent } from './Advocates';
import { NextPageComponent } from './NextPage';
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

  const getAdovecateList = async (isApiAdvocateList: boolean, setAdovecateList: React.Dispatch<React.SetStateAction<IAdvocate | undefined>>) => {
    const response = await fetch('http://localhost:8000/advocates/', {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    if (isApiAdvocateList) {
      setAdovecateList(json);
    }
  }

  useEffect(() => {
    let isApiAdvocateList = true;
    getAdovecateList(isApiAdvocateList, setAdovecateList);
    return () => {
      isApiAdvocateList = false;
    }
  }, [setAdovecateList]);

  
  return (
    <Section>
      <SearchComponent />
      <AdovecateList>
        {
          adovecateList?.advocates.map((item: Advocate) => (
            // eslint-disable-next-line react/jsx-key
            <AdovocateComponent advocate={item} key={item.username} />
          ))
        }
      </AdovecateList>
      <NextPageComponent pagination={adovecateList?.pagination}/>
    </Section>
  )
}