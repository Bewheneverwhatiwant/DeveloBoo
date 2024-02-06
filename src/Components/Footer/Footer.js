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
color: #D9D9D9;
font-family: 'RIDIBatang';
font-size: 10px;
line-height: 15px;
text-align: left;
justify-content: center;
align-items: center;
`;

export default function Component() {
    return (
        <FooterContainer>
            <CustomRow>
                <StyledImg src={'logo_hufs.png'} width='80%' height='6vh' flex='1' />
                <CustomColumn flex='1'>
                    <Detail>
                        HUFS GIT & CSE 21 nayeong lee
                        Feedback | lny021102@hufs.ac.kr
                        Github | Bewheneverwhatiwant
                    </Detail>
                </CustomColumn>
            </CustomRow>
        </FooterContainer>
    );
};