import React from 'react';
import styled from 'styled-components';
import StyledImg from '../../Components/Container/StyledImg';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';

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
width: 50px;
height: 20px;
margin: 5px;

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

export default function Test_man({ selectedItem, imageIndex, handlePrevClick, handleNextClick }) {

    return (
        <CustomRow>
            <CustomCenter>
                <MoveButton onClick={handlePrevClick}>이전</MoveButton>
            </CustomCenter>
            <BooContainer>
                <StyledImg src={'Test_man.png'} width='50%' height='70%' />
                {selectedItem === 'glass' && <OverlayImg src={`Test_glass${imageIndex + 1}.png`} width='10%' style={{ top: '10%' }} />}
                {selectedItem === 'jacket' && <OverlayImg src={`Test_jacket${imageIndex + 1}.png`} width='30%' style={{ top: '20%' }} />}
            </BooContainer>
            <CustomCenter>
                <MoveButton onClick={handleNextClick}>다음</MoveButton>
            </CustomCenter>
        </CustomRow>
    );
}
