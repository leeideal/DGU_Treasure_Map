import styled from "styled-components";
import Header from './Header';
import Body from './Body';


const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
`

const Background = styled.section`
    max-width: 500px;
    max-height: 100vh;
    width : 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cafe24Ohsquareair";
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