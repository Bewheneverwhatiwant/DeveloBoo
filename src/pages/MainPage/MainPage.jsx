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
  const [selectedItem, setSelectedItem] = useState({ glass: false, jacket: false });
  const [imageIndex, setImageIndex] = useState({ glass: 0, jacket: 0 });

  const glassImages = ['Test_glass1.png', 'Test_glass2.png', 'Test_glass3.png', 'Test_glass4.png'];
  const jacketImages = ['Test_jacket1.png', 'Test_jacket2.png', 'Test_jacket3.png'];

  // 항목 표시 여부 토글
  const toggleItem = (item) => {
    setSelectedItem(prev => ({ ...prev, [item]: !prev[item] }));
  };

  // '다음' 버튼 클릭 핸들러 수정
  const handleNextClick = (item) => {
    setImageIndex((prev) => ({
      ...prev,
      [item]: (prev[item] + 1) % (item === 'glass' ? glassImages.length : jacketImages.length)
    }));
  };

  // '이전' 버튼 클릭 핸들러 수정
  const handlePrevClick = (item) => {
    setImageIndex((prev) => ({
      ...prev,
      [item]: prev[item] - 1 < 0 ? (item === 'glass' ? glassImages.length : jacketImages.length) - 1 : prev[item] - 1
    }));
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
        <Test_buttons onSelect={toggleItem} />
      </PageContainer>
    </ContainerCenter>
  );
}
