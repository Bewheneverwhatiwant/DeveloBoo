import React from 'react';
import styled, { keyframes } from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import StyledImg from '../../Components/Container/StyledImg';

const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
background-color: translate;
`;

const swing = keyframes`
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(10deg);
}
50% {
  transform: rotate(0deg);
}
75% {
  transform: rotate(-10deg);
}
100% {
  transform: rotate(0deg);
}
`;

const ChatContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;

animation: ${swing} 2s infinite;
transform-origin: left bottom;
`;

const StyledImg2 = styled.img`
z-index: 1;
`;

const Detail = styled.a`
color: black;
font-family: 'RIDIBatang';
font-size: 8px;
line-height: 20px;
position: absolute;
z-index: 2;

width: 60%
text-align: center; 

`;

export default function Components() {
    return (
        <Banner>
            <CustomRow gap='5px'>
                <StyledImg src={'boo_chicken.png'} width='40%' />
                <ChatContainer>
                    <StyledImg2 src={'icon_chat_notice.png'} width='60%' height='80%' />
                    <Detail>날 꾸며줘서 고마워!<br />오늘도 행복한 하루 보내!</Detail>
                </ChatContainer>
            </CustomRow>
        </Banner>
    );
};
