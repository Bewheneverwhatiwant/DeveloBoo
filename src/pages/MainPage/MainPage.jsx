import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import StyledImg from '../../Components/Container/StyledImg';
import Test_buttons from './Test_buttons';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const PageContainer = styled(ContainerCenter)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
  gap: 30px;
`;
const BooContainer = styled.div`
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;

const OverlayImg = styled(StyledImg)`
  position: absolute;
  z-index: 2;
`;

const MoveButton = styled.button`
background-color: pink;
color: black;
border: none;
border-radius: 10px;
font-family: 'RIDIBatang';
font-size: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export default function Component() {
  const [selectedItem, setSelectedItem] = useState('');
  const [imageIndex, setImageIndex] = useState(1); // 현재 이미지 인덱스 상태 추가

  // 이미지 배열 정의
  const glassImages = ['Test_glass1.png', 'Test_glass2.png', 'Test_glass3.png', 'Test_glass4.png'];
  const jacketImages = ['Test_jacket1.png', 'Test_jacket2.png', 'Test_jacket3.png'];

  // '다음' 버튼 클릭 핸들러
  const handleNextClick = () => {
    if (selectedItem === 'glass') {
      setImageIndex((prevIndex) => (prevIndex % glassImages.length) + 1);
    } else if (selectedItem === 'jacket') {
      setImageIndex((prevIndex) => (prevIndex % jacketImages.length) + 1);
    }
  };

  const handlePrevClick = () => {
    if (selectedItem === 'glass') {
      setImageIndex((prevIndex) => {
        if (prevIndex - 1 < 1) {
          return glassImages.length; // 첫 번째 이미지에서 '이전'을 누르면 마지막 이미지로 순환
        } else {
          return prevIndex - 1;
        }
      });
    } else if (selectedItem === 'jacket') {
      setImageIndex((prevIndex) => {
        if (prevIndex - 1 < 1) {
          return jacketImages.length; // 첫 번째 이미지에서 '이전'을 누르면 마지막 이미지로 순환
        } else {
          return prevIndex - 1;
        }
      });
    }
  };

  return (
    <ContainerCenter>
      <PageContainer>
        메인 페이지
        <CustomRow>
          <CustomCenter>
            <MoveButton onClick={handlePrevClick}>이전</MoveButton>
          </CustomCenter>
          <BooContainer>
            <StyledImg src={'Test_man.png'} width='50%' height='70%' />
            {selectedItem === 'glass' && (
              <OverlayImg src={glassImages[imageIndex - 1]} width='10%' style={{ top: '20%' }} />
            )}
            {selectedItem === 'jacket' && (
              <OverlayImg src={jacketImages[imageIndex - 1]} width='30%' style={{ top: '20%' }} />
            )}
          </BooContainer>
          <CustomCenter>
            <MoveButton onClick={handleNextClick}>다음</MoveButton>
          </CustomCenter>
        </CustomRow>
        <Test_buttons onSelect={setSelectedItem} resetImageIndex={() => setImageIndex(1)} />
      </PageContainer>
    </ContainerCenter>
  );
};
