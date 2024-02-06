import React, { useState } from 'react';
import styled from 'styled-components';
import Test_buttons from './Test_buttons';
import Test_man from './Test_man';

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

export default function MainPage() {
  const [selectedItem, setSelectedItem] = useState('');
  const [imageIndex, setImageIndex] = useState(0); // 이미지 인덱스 초기값을 0으로 설정

  const glassImages = ['Test_glass1.png', 'Test_glass2.png', 'Test_glass3.png', 'Test_glass4.png'];
  const jacketImages = ['Test_jacket1.png', 'Test_jacket2.png', 'Test_jacket3.png'];

  // '다음' 버튼
  const handleNextClick = () => {
    if (selectedItem === 'glass') {
      setImageIndex((prevIndex) => (prevIndex + 1) % glassImages.length);
    } else if (selectedItem === 'jacket') {
      setImageIndex((prevIndex) => (prevIndex + 1) % jacketImages.length);
    }
  };

  // '이전' 버튼
  const handlePrevClick = () => {
    if (selectedItem === 'glass') {
      setImageIndex((prevIndex) => prevIndex - 1 < 0 ? glassImages.length - 1 : prevIndex - 1);
    } else if (selectedItem === 'jacket') {
      setImageIndex((prevIndex) => prevIndex - 1 < 0 ? jacketImages.length - 1 : prevIndex - 1);
    }
  };

  return (
    <ContainerCenter>
      <PageContainer>
        메인 페이지
        <Test_man
          selectedItem={selectedItem}
          imageIndex={imageIndex}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <Test_buttons onSelect={setSelectedItem} resetImageIndex={() => setImageIndex(0)} />
      </PageContainer>
    </ContainerCenter>
  );
}
