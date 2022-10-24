import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../style/device';
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
    return (
        <Section>
            <SearchComponent />
            <AdovecateList>
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
            </AdovecateList>
        </Section>
    )
}