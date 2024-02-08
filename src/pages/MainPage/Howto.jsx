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
height: 50vh;
background-color: skyblue;
`;

const Title = styled.h1`
color: white;
font-family: 'RIDIBatang';
font-size: 15px;
`;


export default function Component() {

    return (
        <Banner>
            <Title>사용 방법 모달</Title>
        </Banner>
    );
}
