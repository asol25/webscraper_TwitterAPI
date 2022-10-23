import React from 'react';
import styled from 'styled-components';

const Search = styled.div``;

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


export const SearchComponent = () => {
    return (
        <Search>
            <InputSearch type="search" placeholder='Search advocates...' />
            <Button className="btn btn--primary" type="submit" value="Search" />
        </Search>
    )
}