import React from "react";
import styled from "styled-components";

export const AdovocateComponent = () => {
    return (
        <div className="cado__preview__wrapper">
            <div className="cado__preview__header">
                {/* <img className="cado__preview__image" src="https://pbs.twimg.com/profile_images/1133122333290291200/xV9gO-D6_400x400.jpg"> */}
                    <div className="name--wrapper">
                        <h4 className="name">Scott Hanselman  </h4>
                        {/* <a href="https://twitter.com/shanselman" target="_blank" className="username"> @shanselman</a> */}
                    </div>
            </div>
            <div className="cado__preview__body">
                <p>Code, OSS, STEM, Beyoncé, 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇿🇼#T1D,@Hanselminutes inclusive tech podcast! MSFT Developer Division Community #DevRel🐹🌮YouTube+TikTok My opinions</p>
            </div>
        </div>
    )
}