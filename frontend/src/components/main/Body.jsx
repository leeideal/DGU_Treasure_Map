import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Map from './Map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot , faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";


import back from "./back2.png";
import { useState } from "react";

import $ from 'jquery';

const Container = styled.div`
    width: 100%;
    background-color: #C7E2DD;
    height: 88vh;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: 10px;
    position: relative;
`

// 카테고리 관련
const Category = styled.section`
    margin-top: 15px;
`
const catelist = ["전체","장학", "교환", "취업", "창업", "학사", "역량", "봉사", "생활", "상담", "편의"]

const CItem = styled(SwiperSlide)`
    background-color: white;
    border-radius: 10px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    font-weight: 600;
`

// List
const ListContainer = styled.div`
    background-color: white;
    /* width: 100%;
    position: absolute;
    top : 420px;
    left: 0;
    z-index: 5;
    height: 32%;
    min-height : fit-content; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

const ListHeader = styled.div`
    padding-top : 15px;
    margin-bottom: 15px;
`
const LItem = styled(SwiperSlide)`
    padding: 5px 0px;
    font-size: 11px;
    border: 1px solid rgba(0,0,0,0.15);
    text-align: center;
    border-radius: 20px;
    font-weight: 600;
`

const ListDiv = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,0.10);
`
const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-size: 10px;
        color : rgba(0,0,0,0.5);
        margin-bottom: 7px;
    }
    h6{
        margin-bottom: 10px;
    }
    padding: 15px 20px;
    border-bottom: 2px solid #C7E2DD;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const ItemImg = styled.img`
    width: 55px;
    height: 55px;
`

const FooterInfo = styled.div`
    display: flex;
    align-items: center;
    p{
        margin-top: 2px;
        font-size: 14px;
    }
`

const Pin = styled(FontAwesomeIcon)`
    color : #C7E2DD;
    margin-right: 5px;
`

const test = ["경영관", "학림관" , "사회과학관", "신공학관", "원흥관", "상록원"]

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top : 400px;
    left: 0;
    z-index: 5;
    height: 32%;
    min-height : fit-content;
`

const CheckBox = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    align-self: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const CheckBoxLogo = styled(FontAwesomeIcon)`
    font-size: 20px;
`


function Body() {
    // 어떤 카테고리를 눌렀는지
    const CategoryClick = (event) => {
        console.log(event.currentTarget.innerText);
    }

    // useEffect(() => {
    //     window.addEventListener('touchmove', handleScroll);
    //     return () => {
    //     window.removeEventListener('touchmove', handleScroll); //clean up
    //     };
    // }, []);

    // let lastScrollY = 0;
    // const handleScroll = (e) => {
    //     const scrollY = e.currentTarget.pageYOffset;
    //     //const scrollY = e.path[1].window.pageYOffset;
    //     const direction = scrollY - lastScrollY  > 0 ? false : true;
    //     lastScrollY = scrollY;
    //     if(direction){
    //         //console.log("down")
    //     }else{
    //         //console.log("up")
    //     }
    // };

    // listUp & Down Btn
    const [check, setCheck] = useState(false);
    const listClick = () => {
        if(check){
            // list가 위에 있을 때
            $("#list").animate({
                top: "400px",
                //height : "32%"
            }, 500);
            $("#realList").animate({
                height : "32vh"
            }, 500);
            setCheck(prev => !prev);
        }else{
            // list가 아래로 있을 때
            $("#list").animate({
                top: "80px",
                //height : "90vh"
            }, 500);
            $("#realList").animate({
                height : "90vh"
            }, 500);
            setCheck(prev => !prev);
        }
    }

    
    return (
        <Container>
            {/* 카테고리 선택 부분 */}
            <Category>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    style={{marginRight: "10px", marginLeft:"10px"}} 
                >
                    {catelist.map((i, v) => (
                        <CItem onClick={(event) => CategoryClick(event)} key={v} value={i}>
                            {i}
                        </CItem>
                    ))}
                </Swiper>
            </Category>

            {/* 지도 부분 */}
            <Map />

            {/* 나오는 리스트들 */}
            <ListBox id="list">
                <CheckBox onClick={listClick}>
                    <CheckBoxLogo icon={check ? faChevronDown : faChevronUp} />
                </CheckBox>
                <ListContainer>
                <ListHeader>
                    <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                     style={{marginRight: "10px", marginLeft:"10px"}}   
                    >
                        {test.map((i, v) => (
                            <LItem  key={v} value={i}>
                                {i}
                            </LItem>
                        ))}
                    </Swiper>
                </ListHeader>
                <ListDiv/>
                <ItemBox id="realList">
                    {/* 검색 리스트가 쭉 뜨는 곳 */}
                    <Item>
                        <Info>
                            <span>장학</span>
                            <h6>장학센터</h6>
                            <FooterInfo>
                                <Pin icon={faLocationDot}/>
                                <p>본관 2층</p>
                            </FooterInfo>
                        </Info>
                        <ItemImg src={back}/>
                    </Item>
                    <Item>
                        <Info>
                            <span>장학</span>
                            <h6>장학센터</h6>
                            <FooterInfo>
                                <Pin icon={faLocationDot}/>
                                <p>본관 2층</p>
                            </FooterInfo>
                        </Info>
                        <ItemImg src={back}/>
                    </Item>
                    <Item>
                        <Info>
                            <span>장학</span>
                            <h6>장학센터</h6>
                            <FooterInfo>
                                <Pin icon={faLocationDot}/>
                                <p>본관 2층</p>
                            </FooterInfo>
                        </Info>
                        <ItemImg src={back}/>
                    </Item>
                    <Item>
                        <Info>
                            <span>장학</span>
                            <h6>장학센터</h6>
                            <FooterInfo>
                                <Pin icon={faLocationDot}/>
                                <p>본관 2층</p>
                            </FooterInfo>
                        </Info>
                        <ItemImg src={back}/>
                    </Item>
                </ItemBox>
                </ListContainer>
            </ListBox>
        </Container>
    )
}
export default Body;