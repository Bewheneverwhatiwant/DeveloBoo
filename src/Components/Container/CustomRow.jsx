import styled from 'styled-components';

const CustomRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap || '30px'};
`;

export default CustomRow;