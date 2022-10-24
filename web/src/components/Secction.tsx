import React, { FC } from 'react';
import styled from 'styled-components';
import { AdovocateComponent } from './Advocates';
import { SearchComponent } from './Search';

const Section = styled.section`
    padding: 4em;
`;

const AdovecateList = styled.div`
    grid-gap: 2em;
    display: grid;
    gap: 2em;
    grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
    width: 100%;
`;
export const SectionComponent: FC = () => {
    return (
        <Section>
            <SearchComponent />
            <AdovecateList>
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
                <AdovocateComponent />
            </AdovecateList>
        </Section>
    )
}