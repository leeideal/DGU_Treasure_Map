import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0px;
    padding: 0px 25px;
    align-items: center;
`

const Title = styled.div`
    font-family: "Cafe24Ohsquare";
    color: #98D4BF;
    text-align: center;
    font-size: 23px;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #98D4BF;
`

function Header2(){
    const navigate = useNavigate();

    return (
        <Container>
            <Title>
                동국<br />보물지도
            </Title>
            <Icon onClick={()=>navigate("/")} icon={faCircleLeft} />
        </Container>
    );
}

export default Header2;