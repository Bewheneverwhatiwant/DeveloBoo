import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import StyledImg from '../../Components/Container/StyledImg';

const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 200px;
background-color: skyblue;

line-height: 20px;
`;

const Title = styled.h1`
color: white;
font-family: 'RIDIBatang';
font-size: 15px;
`;

const Detail = styled.a`
color: white;
font-family: 'RIDIBatang';
font-size: 15px;
`;

export default function Test_buttons({ onSelect }) {
    return (
        <Banner>
            <Title>
                여기는 공지 페이지
            </Title>

            <CustomColumn>
                <StyledImg src={'icon_chat_notice.png'} />

                <StyledImg src={'boo_notice.jpg'} />
            </CustomColumn>
        </Banner>
    );
};
