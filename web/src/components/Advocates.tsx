import React, { FC } from "react";
import styled from "styled-components";
import { Advocate } from "../type";

const Wrapper = styled.div`
    display: block;
    color: #fff;
`;

const Information = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`;

const Description = styled.div`
    padding: 1em 0;
    font-size: 18px;
`;

const Picture = styled.img`
    width: 50px;
    heigh: 50px;
    object-fit: contain;
    border-radius: 100%;
`;

const Cusomter = styled.div`
    font-size: 22px;
`;
interface IProps {
    advocate: Advocate
}

export const AdovocateComponent: FC<IProps> = (props) => {
    const { advocate } = props;
    
    return (
        <Wrapper>
            <Information>
                <Picture src={advocate.profile_pic}></Picture>
                <Cusomter>
                    <h4>{advocate.name}</h4>
                    <a href={advocate.twitter} target="_blank" rel="noreferrer"> @{advocate.username}</a>
                </Cusomter>
            </Information>
            <Description>
                <p>{advocate.bio}</p>
            </Description>
        </Wrapper>
    )
}