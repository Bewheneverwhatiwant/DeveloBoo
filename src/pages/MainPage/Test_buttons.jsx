import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';

const Button = styled.button`
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
            <Button onClick={() => onSelect('glass')}>
                glass
                {/* 이미지 태그 제거, 버튼 클릭으로 상태 변경 처리 */}
            </Button>
            <Button onClick={() => onSelect('jacket')}>
                jacket
                {/* 이미지 태그 제거, 버튼 클릭으로 상태 변경 처리 */}
            </Button>
        </CustomRow>
    );
};
