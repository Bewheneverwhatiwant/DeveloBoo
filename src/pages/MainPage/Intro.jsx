import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';

const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
border-radius: 20px;
gap: 30px;

width: 80%;
background-color: skyblue;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

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

// 좌우로 10도씩 기울어짐
const tiltAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
  animation: ${fadeIn} 1s ease-out;
  border-radius: 10px;
`;

const StyledImg2 = styled.img`
  width: 80px;
  height: 80px;
  animation: ${tiltAnimation} 2s ease-in-out infinite;
  border-radius: 10px;
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

const ChatContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
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
      <CustomRow>
        <StyledImg2 src={'boo_intro.jpg'} />
        <CustomCenter>
          <ChatText>
            안녕! 나는 한국외대 마스코트<br />Boo 라고 해.
          </ChatText>
        </CustomCenter>
      </CustomRow>
      <CustomRow>
        <ChatContainer>
          <ChatText>
            여러가지 아이템을 조합해서<br />너의 대학생활을<br />표현해줘!
          </ChatText>
        </ChatContainer>
        <ListContainer>
          <StyledImg src={images[currentIndex]} alt="슬라이드 이미지" />
        </ListContainer>
      </CustomRow>
    </Banner>
  );
}
