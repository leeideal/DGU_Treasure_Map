import styled from "styled-components";
import Header from '../components/main/Header';
import Body from '../components/main/Body';


const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
`

const Background = styled.section`
    max-width: 430px;
    min-width: 350px;
    max-height: 100vh;
    width : 100vw; 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cafe24Ohsquareair";
    overflow-y: hidden;
`

function Main () {
    return (
        <ToCenter>
            <Background>
                <Header />
                <Body />
            </Background>
        </ToCenter>
    );
}
export default Main;