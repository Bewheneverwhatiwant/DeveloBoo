import { styled } from 'styled-components';
import StyledImg from '../Container/StyledImg';
import CustomRow from '../Container/CustomRow';
import CustomCenter from '../Container/CustomCenter';

const HeaderContainer = styled.header`
height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: white;
`;

const Boo = styled.div`
display: flex;
justify-content: center;
align-items: center;

color: skyblue;
font-family: 'RIDIBatang';
font-size: 1rem;
`;

export default function Component() {
    return (
        <HeaderContainer>
            <Boo>
                Custom Boo!
            </Boo>
        </HeaderContainer>
    );
};