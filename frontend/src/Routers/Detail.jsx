import styled from "styled-components";
import Header2 from "../components/detial/Header";
import Info from "../components/detial/Info";

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

function Detail(){
    return (
        <ToCenter>
            <Background>
                <Header2/>
                <Info />
            </Background>
        </ToCenter>
    );
}

export default Detail;