import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../style/device';
import { Advocate, Pagination } from '../type';
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
  const [inputSearch, setInputSearch] = useState<string>("");
  const [submitSearch, setSubmitSearch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [adovecates, setAdovecates] = useState<Advocate[] | undefined>();
  const [pagination, setPagination] = useState<Pagination | undefined>();

  const getAdovecateList = async (url: string, method: string) => {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
    });
    const json = await response.json();
    return json;
  }

  const handleChangeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangeInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitSearch(!submitSearch);
  }

  useEffect(() => {
    let isApiAdvocateList = true;
    (async () => {
      if (isApiAdvocateList) {
        const url = `http://localhost:8000/advocates/page/${currentPage}`;
        const method = "GET";
        const response = await getAdovecateList(url, method);
        setAdovecates(response.advocates);
        setPagination(response.pagination);
      }
    })()
    return () => {
      isApiAdvocateList = false;
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    let isApiAdvocateList = true;
    (async () => {
      if (isApiAdvocateList) {
        const url = `http://localhost:8000/advocates/search/${inputSearch}`;
        const method = "GET";
        const response = await getAdovecateList(url, method);
        if (response) {
          setAdovecates(response.advocates);
        }
      }
    })()
    return () => {
      isApiAdvocateList = false;
    }
  }, [submitSearch, setAdovecates]);
  
  return (
    <Section>
      <SearchComponent inputSearch={inputSearch} changeInputSearch={handleChangeInputSearch} handleSubmit={handleSubmitSearch} />
      <AdovecateList>
        {
            adovecates?.map((item: Advocate) => (
            <AdovocateComponent advocate={item} key={item.username} />))
        }
      </AdovecateList>
      <NextPageComponent changeCurrentPage={handleChangeCurrentPage} pagination={pagination} />
    </Section>
  )
}