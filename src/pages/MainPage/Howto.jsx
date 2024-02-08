import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';

const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
border-radius: 20px;
gap: 10px;

width: 60%;
background-color: skyblue;
`;

const Title = styled.h1`
color: white;
font-family: 'RIDIBatang';
font-size: 15px;
line-height: 20px;
`;


export default function Component() {

    return (
        <Banner>
            <Title>1. 여러가지 아이템 중 원하는 것을 선택합니다.</Title>
            <Title>1-1. 만약 말풍선을 추가한다면, 말풍선 클릭 시 텍스트를 입력할 수 있습니다.</Title>
            <Title>1-3. 말풍선 안 텍스트는 7글자 이내로 작성해주세요.</Title>
            <Title>2. 아래의 '미리보기' 버튼을 클릭하면, 내가 커스텀한 Boo를 확인할 수 있습니다.</Title>
            <Title>2-1. 휴대전화의 너비에 따라 미리보기와 실제 Boo가 완벽하게 일치하지 않을 수도 있습니다.</Title>
            <Title>3. 최하단의 '다운로드' 버튼을 눌러, 내가 만든 Boo를 저장할 수 있습니다.</Title>
            <Title>4. 내가 만든 Boo를 SNS에 마구마구 자랑해주세요!</Title>
        </Banner>
    );
}
