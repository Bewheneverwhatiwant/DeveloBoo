import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';

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

export default function Test_buttons({ onSelect, resetImageIndex }) {
    return (
        <CustomRow>
            <Button onClick={() => { onSelect('glass'); resetImageIndex(); }}>glass</Button>
            <Button onClick={() => { onSelect('jacket'); resetImageIndex(); }}>jacket</Button>
        </CustomRow>
    );
};
