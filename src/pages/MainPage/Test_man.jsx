import React, { useRef } from 'react';
import styled from 'styled-components';
import StyledImg from '../../Components/Container/StyledImg';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';
import CustomColumn from '../../Components/Container/CustomColumn';

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
width: 60px;
height: 20px;
margin: 5px;

  background-color: pink;
  color: white;
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

    const booContainerRef = useRef(null);

    return (
        <CustomRow>
            <CustomCenter>
                <CustomColumn>
                    {selectedItem.glass && (
                        <MoveButton onClick={() => handlePrevClick('glass')}>이전 안경</MoveButton>
                    )}
                    {selectedItem.jacket && (
                        <MoveButton onClick={() => handlePrevClick('jacket')}>이전 자켓</MoveButton>
                    )}
                </CustomColumn>
            </CustomCenter>
            <BooContainer ref={booContainerRef} id="booContainer">
                <StyledImg src={'Test_man.png'} width='80%' height='100%' />
                {selectedItem.glass && (
                    <OverlayImg src={`Test_glass${imageIndex.glass + 1}.png`} width='20%' style={{ top: '10%' }} />
                )}
                {selectedItem.jacket && (
                    <OverlayImg src={`Test_jacket${imageIndex.jacket + 1}.png`} width='60%' style={{ top: '20%' }} />
                )}
            </BooContainer>
            <CustomCenter>
                <CustomColumn>
                    {selectedItem.glass && (
                        <MoveButton onClick={() => handleNextClick('glass')}>다음 안경</MoveButton>
                    )}
                    {selectedItem.jacket && (
                        <MoveButton onClick={() => handleNextClick('jacket')}>다음 자켓</MoveButton>
                    )}
                </CustomColumn>
            </CustomCenter>
        </CustomRow>
    );
}
