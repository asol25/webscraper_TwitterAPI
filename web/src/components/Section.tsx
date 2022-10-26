import React, { FC, useEffect, useRef, useState } from 'react';
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
  const currentPage = useRef(1);
  const [adovecateList, setAdovecateList] = useState<IAdvocate | undefined>();

  const getAdovecateList = async (currentPage:  React.MutableRefObject<number>) => {
    const response = await fetch(`http://localhost:8000/advocates/${currentPage.current}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return json;
  }

  useEffect(() => {
    let isApiAdvocateList = true;
    (async () => {
      if (isApiAdvocateList) {
        setAdovecateList(await getAdovecateList(currentPage));
      }
    })()
    return () => {
      isApiAdvocateList = false;
    }
  });

  const handleCurrentPage = (page: number) => {
    currentPage.current = page;
  };
  
  return (
    <Section>
      <SearchComponent />
      <AdovecateList>
        {
          adovecateList?.advocates.map((item: Advocate) => (
            <AdovocateComponent advocate={item} key={item.username} />
          ))
        }
      </AdovecateList>
      <NextPageComponent changeCurrentPage={handleCurrentPage} pagination={adovecateList?.pagination} />
    </Section>
  )
}