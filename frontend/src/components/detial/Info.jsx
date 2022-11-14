import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faSquarePhone, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import img from "./aa.jpeg"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    margin-top: 15px;
    font-size : 28px;
    text-align: center;
    word-break: break-all;
    width: 80%;
    margin-bottom: 15px;
    font-family: "Cafe24Ohsquare";
    color : #98D4BF;
`

const Img = styled.img`
    width: 65%;
    border-radius: 20px;
`

const InfoBox =styled.div`
    color : #98D4BF;
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 35px 0px;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0px;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 14px;
    margin-bottom: 7px;
`

const ItemTitle = styled.h1`
    font-size: 14px;
    font-family: "Cafe24Ohsquare";
    margin-bottom: 12px;
`

const Footer = styled.p`
    color : black;
    font-size: 13px;
`

const Divider = styled.div`
    height : 80px;
    width: 1px;
    border-radius: 10px;
    background-color : #98D4BF;
`

const FooterBox = styled.div`
    display: flex;
    width: 76%;
    flex-direction: column;
    margin-top: -10px;

    h1{
        font-family: "Cafe24Ohsquare";
        margin-bottom: 10px;
        color : #98D4BF;

    }
    p{
        font-size: 14px;
    }
`



function Info(){
    return (
        <Container>
            <Title>경영대학 학사운영실</Title>
            <Img src={img}/>
            <InfoBox>
                <Item>
                    <Icon icon={faLocationDot}/>
                    <ItemTitle>
                        Location
                    </ItemTitle>
                    <Footer>
                        경영관 2층
                    </Footer>
                </Item>
                <Divider/>
                <Item>
                    <Icon icon={faClock}/>
                    <ItemTitle>
                    Time
                    </ItemTitle>
                    <Footer>
                    09:00 ~ 16:00
                    </Footer>
                </Item>
                <Divider/>
                <Item>
                    <Icon icon={faSquarePhone}/>
                    <ItemTitle>
                        Phone
                    </ItemTitle>
                    <Footer>
                        02-0266-4577
                    </Footer>
                </Item>
            </InfoBox>
                <FooterBox>
                    <h1>사용방법</h1>
                    <p>본교 학생만 사용 가능한 시설입니다.</p>
                </FooterBox>
        </Container>
    );
}

export default Info;