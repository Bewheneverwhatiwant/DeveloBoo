import React, { useRef, useState } from 'react';
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
`;

const OnlyBoo = styled.div`
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

const OnlyBoo2 = styled.div`
display: flex;
position: relative;
`;

const Input = styled.input`
  width: 55%;
  height: 30%;
  border: 2px solid ${props => props.editing ? 'grey' : 'transparent'};
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 25%;
  left: 10%;
  z-index: 3;
  font-family: 'RIDIBatang';
`;

// const CompleteButton = styled.button`
//   background-color: ${props => props.editing ? 'grey' : 'transparent'};
//   color: white;
//   border: none;
//   border-radius: 10px;
//   padding: 5px 10px;
//   position: absolute;
//   top: 55%;
//   left: 20%;
//   z-index: 3;
// `;

export default function Test_man({ selectedItem, imageIndex, handlePrevClick, handleNextClick, chatText, setChatText }) {

    const booContainerRef = useRef(null);

    //const [chatText, setChatText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    // const handleComplete = () => {
    //     setDisplayText(chatText);
    //     setIsEditing(false);
    // };

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

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
                <CustomColumn>
                    {selectedItem.chat && (
                        <OnlyBoo2>
                            <StyledImg src={'icon_chat.png'} width='90%' height='40vh' onDoubleClick={handleDoubleClick} />
                            <Input
                                value={chatText}
                                onChange={(e) => setChatText(e.target.value)}
                                editing={isEditing}
                                onDoubleClick={() => setIsEditing(true)}
                            />
                            {/* <CompleteButton
                                onClick={handleComplete}
                                editing={isEditing}
                            >
                                완료
                            </CompleteButton> */}
                        </OnlyBoo2>
                    )}
                    <OnlyBoo>
                        <StyledImg src={'Test_man.png'} width='80%' height='100%' />
                        {selectedItem.glass && (
                            <OverlayImg src={`Test_glass${imageIndex.glass + 1}.png`} width='20%' style={{ top: '10%' }} />
                        )}
                        {selectedItem.jacket && (
                            <OverlayImg src={`Test_jacket${imageIndex.jacket + 1}.png`} width='60%' style={{ top: '20%' }} />
                        )}
                    </OnlyBoo>
                </CustomColumn>
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
