import styled from 'styled-components';

const SizedBox = styled.div`
    width: ${props => props.$size || "2rem"};
    height: ${props => props.$size || "2rem"};
`;

export default SizedBox;