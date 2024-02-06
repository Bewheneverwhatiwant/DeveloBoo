import { styled } from 'styled-components';

const HeaderContainer = styled.header`
height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
    color: white;
`;

export default function Component() {
    return (
        <HeaderContainer>
            안녕
        </HeaderContainer>
    );
};