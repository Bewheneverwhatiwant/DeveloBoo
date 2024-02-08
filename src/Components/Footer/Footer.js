import { styled } from 'styled-components';
import StyledImg from '../Container/StyledImg';
import CustomColumn from '../Container/CustomColumn';
import CustomCenter from '../Container/CustomCenter';
import CustomRow from '../Container/CustomRow';

const FooterContainer = styled.footer`
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-top: 1px solid #D9D9D9;
    color: white;
`;

const Detail = styled.a`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`;

const Text = styled.a`
display: flex;
color: #D9D9D9;
font-family: 'RIDIBatang';
font-size: 10px;
line-height: 15px;
text-align: left;
`;

export default function Component() {
    return (
        <FooterContainer>
            <CustomRow>
                <StyledImg src={'logo_hufs.png'} width='40%' height='6vh' />
                <CustomColumn>
                    <Detail>
                        <Text>HUFS GIT & CSE 21 nayeong lee</Text>
                        <Text>Feedback | lny021102@hufs.ac.kr</Text>
                        <Text>Github | Bewheneverwhatiwant</Text>
                    </Detail>
                </CustomColumn>
            </CustomRow>
        </FooterContainer>
    );
};