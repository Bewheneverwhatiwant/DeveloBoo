import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Test_buttons from './Test_buttons';
import Test_man from './Test_man';
import html2canvas from 'html2canvas';
import StyledImg from '../../Components/Container/StyledImg';
import CustomColumn from '../../Components/Container/CustomColumn';
import CustomCenter from '../../Components/Container/CustomCenter';
import CustomRow from '../../Components/Container/CustomRow';
import Warning from './Warning';
import Intro from './Intro';
import Howto from './Howto';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 80vh;
`;

const PageContainer = styled(ContainerCenter)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
  gap: 30px;
`;

const Down = styled.button`
width: 40%;
background-color: skyblue;
color: white;
border: none;
border-radius: 10px;
padding: 10px;
font-family: 'RIDIBatang';
font-size: 10px;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const PreviewContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px dashed #ccc; // 미리보기 구분
`;

const OverlayImg = styled(StyledImg)`
  position: absolute;
  z-index: 2;
`;

const OnlyBoo = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const OnlyBoo2 = styled.div`
display: flex;
position: relative;
`;

const Text = styled.a`
width: 60%;
height: 40%;
position: absolute;
top: 40%;
left: 10%;

color: black;
zIndex: 3;
font-family: 'RIDIBatang';
line-height: 20px;
`;

const Line = styled.div`
width: 100px;
height: 0.5px;
background-color: pink;
`;

const LineContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const LeftDiv = styled.div`
width: 80%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
`;

export default function MainPage() {
  const [selectedItem, setSelectedItem] = useState({ glass: false, jacket: false, chat: false });
  const [imageIndex, setImageIndex] = useState({ glass: 0, jacket: 0 });
  const booContainerRef = useRef(null); // BooContainer를 참조하기 위한 ref 추가
  const [showPreview, setShowPreview] = useState(false); // 미리보기 표시

  const [chatText, setChatText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const glassImages = ['Test_glass1.png', 'Test_glass2.png', 'Test_glass3.png', 'Test_glass4.png'];
  const jacketImages = ['Test_jacket1.png', 'Test_jacket2.png', 'Test_jacket3.png'];

  const [isVisible, setIsVisible] = useState(false);

  const toggleComponent = () => {
    setIsVisible(!isVisible);
  };

  // 항목 표시 여부 토글
  // 객체 형태로, glass와 jacket 항목의 표시 여부를 boolean 값으로 관리
  // selectedItem 상태의 복사본을 만들고 (...prev), 주어진 item의 값을 현재의 반대로 설정 (!prev[item])
  // 예를 들어, selectedItem 상태가 { glass: false, jacket: false } 이고, toggleItem('glass')가 호출되면
  // 상태는 { glass: true, jacket: false }로 업데이트 된다
  const toggleItem = (item) => {
    setSelectedItem(prev => ({ ...prev, [item]: !prev[item] }));
  };

  // '다음' 버튼
  // imageIndex 상태의 복사본을 만들고, 주어진 item에 대한 인덱스를 현재 값에서 1 증가시킨 후
  // 해당 항목의 이미지 배열 길이로 나눈 나머지가 값이 된다
  // 인덱스가 이미지 배열의 범위를 넘어가지 않도록 하기 위함
  const handleNextClick = (item) => {
    setImageIndex((prev) => ({
      ...prev,
      [item]: (prev[item] + 1) % (item === 'glass' ? glassImages.length : jacketImages.length)
    }));
  };

  // '이전' 버튼
  // imageIndex 상태의 복사본을 만들고, 주어진 item에 대한 인덱스를 현재 값에서 1 감소
  // 인덱스가 0 미만이 될 경우, 해당 항목의 이미지 배열 길이에서 1을 뺀 값으로 설정 -> 인덱스가 순환적으로 다루어지도록.
  // 사용자가 이전 버튼을 눌렀을 때 마지막 이미지로 이동
  const handlePrevClick = (item) => {
    setImageIndex((prev) => ({
      ...prev,
      [item]: prev[item] - 1 < 0 ? (item === 'glass' ? glassImages.length : jacketImages.length) - 1 : prev[item] - 1
    }));
  };

  const downloadImage = () => {
    const element = document.getElementById('booContainer'); // id를 사용하여 요소 선택
    html2canvas(element).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'capture.png';
      link.click();
    });
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <Intro />
        <LeftDiv>
          <Down onClick={toggleComponent}>
            <CustomRow>
              <StyledImg src={'icon_cloud.png'} width='20px' height='20px' />
              <CustomCenter>
                사용방법
              </CustomCenter>
            </CustomRow>
          </Down>
        </LeftDiv>
        {isVisible && <Howto />}
        <Test_man
          selectedItem={selectedItem}
          imageIndex={imageIndex}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          ref={booContainerRef}

          chatText={chatText}
          setChatText={setChatText}
        />
        <CustomRow>
          <LineContainer>
            <Line />
          </LineContainer>
          <StyledImg src={'icon_brush.png'} width='20px' height='20px' />
          <LineContainer>
            <Line />
          </LineContainer>
        </CustomRow>
        <Test_buttons onSelect={toggleItem} />
        <Down onClick={togglePreview}>미리보기</Down>
        {showPreview && (
          <PreviewContainer>

            <CustomColumn>
              {selectedItem.chat && (
                <OnlyBoo2>
                  <StyledImg src={'icon_chat.png'} width='90%' height='40vh' onDoubleClick={handleDoubleClick} />

                  <Text>
                    {chatText}
                  </Text>
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

          </PreviewContainer>
        )}

        <Warning />

        <Down onClick={downloadImage}>다운로드 하기</Down>
      </PageContainer>
    </ContainerCenter>
  );
}
