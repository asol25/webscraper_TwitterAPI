import React, { FC } from 'react';
import styled from 'styled-components';

const Search = styled.div`
    margin: 2em 0;
`;

const InputSearch = styled.input`
    background-color: #2b3031;
    border: none;
    border-radius: 5px;
    color: #f0f8ff;
    font-size: 16px;
    padding: 1em;
`;

const Button = styled.input`
    background-color: aqua;
    color: #000;
    border-radius: 5px;
    font-size: 16px;
    padding: 1em;
`;

interface IProps {
    inputSearch: string,
    changeInputSearch: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}

export const SearchComponent: FC<IProps> = (props) => {
    const { inputSearch, changeInputSearch, handleSubmit } = props;
    return (
        <Search>
          <form onSubmit={(event) => handleSubmit(event)}>
          <InputSearch value={inputSearch} onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeInputSearch(event)} type="search" placeholder='Search advocates...' />
            <Button className="btn btn--primary" type="submit" value="Search" />
          </form>
        </Search >
    )
}