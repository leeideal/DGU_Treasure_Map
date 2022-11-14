import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faSquarePhone, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import img from "../../img/default.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../axios";

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

const SubTitle = styled.h1`
    margin-top: -5px;
    font-size : 14px;
    text-align: center;
    word-break: break-all;
    width: 80%;
    margin-bottom: 15px;
    font-family: "Cafe24Ohsquareair";
    color : #414141;
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
        word-break: keep-all;
    }
`



function Info(){
    const [data, setData] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        getData();
    },[])

    const getData = async() => {
        try{
            const data = await API.get(`facility/${id}`);
            const reData = data.data;
            setData(reData)
            console.log(data.data);
        }catch(error){
            console.log(error)
        }
    }

    return (
        <Container>
            <Title>{data?.name}</Title>
            <SubTitle>{data?.category}</SubTitle>
            <Img src={data?.img === "" ? img : `data:image/jpeg;base64,${data?.img}`}/>
            <InfoBox>
                <Item>
                    <Icon icon={faLocationDot}/>
                    <ItemTitle>
                        Location
                    </ItemTitle>
                    <Footer>
                        {data?.place} {data?.floor}층
                    </Footer>
                </Item>
                <Divider/>
                <Item>
                    <Icon icon={faClock}/>
                    <ItemTitle>
                    Time
                    </ItemTitle>
                    <Footer>
                    {data?.time === "None ~ None" ? "상시" : data?.time}
                    </Footer>
                </Item>
                <Divider/>
                <Item>
                    <Icon icon={faSquarePhone}/>
                    <ItemTitle>
                        Phone
                    </ItemTitle>
                    <Footer>
                    {data?.phone === "" ? "없음" : data?.phone}
                    </Footer>
                </Item>
            </InfoBox>
                <FooterBox>
                    <h1>사용방법</h1>
                    <p>{data?.use}</p>
                </FooterBox>
        </Container>
    );
}

export default Info;