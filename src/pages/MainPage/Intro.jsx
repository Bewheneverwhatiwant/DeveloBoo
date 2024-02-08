import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;

width: 100%;
height: 200px;
background-color: skyblue;

line-height: 20px;
`;

const Title = styled.h1`
color: white;
font-family: 'RIDIBatang';
font-size: 15px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
  animation: ${fadeIn} 1s ease-out;
`;

const images = [
    'Test_glass1.png',
    'Test_jacket1.png',
    'Test_glass2.png',
    'icon_chat.png'
];

const ChatText = styled.a`
color: white;
font-family: 'RIDIBatang';
font-size: 15px;
line-height: 20px;
`;

export default function Test_buttons({ onSelect }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Banner>
            <ChatText>
                여러가지 아이템을 조합해서<br />너의 대학생활을 표현해줘!
            </ChatText>
            <ListContainer>
                <StyledImg src={images[currentIndex]} alt="슬라이드 이미지" />
            </ListContainer>
        </Banner>
    );
}
