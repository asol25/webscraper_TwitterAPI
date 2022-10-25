import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Pagination } from '../type';



interface IProps {
    pagination: Pagination | undefined
}

export const NextPageComponent: FC<IProps> = (props) => {
    const { pagination } = props;
    const [isCurrentPage, setIsCurrentPage] = useState(false);

    const Wrapper = styled.div`
    margin: 0 auto;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    `;

    const Button = styled.button`
    background-color: ${isCurrentPage ? "aqua" : "azure"};
    color: #000;

    border-radius: 2px;
    font-weight: 500;
    margin: 2px;

    border: none;
    cursor: pointer;
    padding: 1em;
    transition: .3s;
    `;
    return (
        <Wrapper className="pagination--wrapper">
            {
                pagination?.pages.map((item) => {
                    pagination?.current_page === item ? setIsCurrentPage(true) : setIsCurrentPage(false);
                    return (<Button key={item}>{item}</Button>)
                })
            }
        </Wrapper>
    )
}
