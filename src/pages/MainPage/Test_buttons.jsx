import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';

const Button = styled.button`
width: 100px;
height: 20px;
  padding: 10px;
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

export default function Test_buttons({ onSelect }) {
    return (
        <CustomRow>
            <CustomColumn>
                <Button onClick={() => { onSelect('glass'); }}>안경 추가</Button>
            </CustomColumn>
            <CustomColumn>
                <Button onClick={() => { onSelect('jacket'); }}>자켓 추가</Button>
            </CustomColumn>
        </CustomRow>
    );
};
