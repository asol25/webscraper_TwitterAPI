import React from "react";
import styled from "styled-components";

const Header = styled.div`
    border-bottom: 1px solid #7fffd4;
`;

const Title = styled.h1`
    padding: 3.5em;
    color: #7fffd4;
`;
export const HeaderComponent = () => {
    return (
        <Header>
            <Title>THINH_LE_VAN</Title>
        </Header>
    )
}