import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import StyledImg from '../../Components/Container/StyledImg';
import Test_buttons from './Test_buttons';

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
  position: relative;
`;

const OverlayImg = styled(StyledImg)`
  position: absolute;
  z-index: 2; // 더 높은 z-index로 이미지가 Test_man.png 위에 오도록 설정
`;

export default function Component() {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <ContainerCenter>
      <PageContainer>
        메인 페이지

        <StyledImg src={'Test_man.png'} width='50%' height='70%' />
        {selectedItem === 'glass' && (
          <OverlayImg src={'Test_glass.png'} width='10%' style={{ top: '20%' }} />
        )}
        {selectedItem === 'jacket' && (
          <OverlayImg src={'Test_jacket.png'} width='30%' style={{ top: '30%' }} />
        )}
        <Test_buttons onSelect={setSelectedItem} />
      </PageContainer>
    </ContainerCenter>
  );
};
