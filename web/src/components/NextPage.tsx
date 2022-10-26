import React, { FC } from 'react'
import styled from 'styled-components'
import { Pagination } from '../type';

interface IProps {
    pagination: Pagination | undefined,
    changeCurrentPage: (page: number) => void
}

const Wrapper = styled.div`
margin: 0 auto;
width: -webkit-fit-content;
width: -moz-fit-content;
width: fit-content;
`;

const Button = styled.button`
background-color: "aqua";
color: #000;

border-radius: 2px;
font-weight: 500;
margin: 2px;

border: none;
cursor: pointer;
padding: 1em;
transition: .3s;
`;

export const NextPageComponent: FC<IProps> = (props) => {
    const { pagination, changeCurrentPage } = props;

    return (
        <Wrapper className="pagination--wrapper">
            {
                pagination?.pages.map((item: number) => {
                    return (<Button onClick={() => changeCurrentPage(item)} key={item}>{item}</Button>)
                })
            }
        </Wrapper>
    )
}
