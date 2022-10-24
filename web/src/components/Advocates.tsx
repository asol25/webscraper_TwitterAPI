import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: block;
    color: #fff;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    };
`;

const Information = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`;

const Description = styled.div`
    padding: 1em 0;
`;

export const AdovocateComponent: FC = () => {
    return (
        <Wrapper>
            <Information>
                {/* <img className="cado__preview__image" src="https://pbs.twimg.com/profile_images/1133122333290291200/xV9gO-D6_400x400.jpg"> */}
                    <div className="name--wrapper">
                        <h4 className="name">Scott Hanselman  </h4>
                        {/* <a href="https://twitter.com/shanselman" target="_blank" className="username"> @shanselman</a> */}
                    </div>
            </Information>
            <Description>
                <p>Code, OSS, STEM, Beyoncé, 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇿🇼#T1D,@Hanselminutes inclusive tech podcast! MSFT Developer Division Community #DevRel🐹🌮YouTube+TikTok My opinions</p>
            </Description>
        </Wrapper>
    )
}