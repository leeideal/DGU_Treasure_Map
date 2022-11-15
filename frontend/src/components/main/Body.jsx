import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Map from './Map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot , faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";


import defaultImg from "../../img/default.png";
import { useState } from "react";

import $ from 'jquery';
import { useRecoilState } from "recoil";
import { isCate, isClick, isInfo } from "../../atom";
import { useEffect } from "react";
import { API } from "../../axios";
import { useNavigate } from "react-router-dom";

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
    margin-bottom: -10px;
`
const catelist = [
    {
        name : "전체",
        id : 10
    },
    {
        name : "장학",
        id : 1
    },
    {
        name : "교환",
        id : 2
    },
    {
        name : "진로",
        id : 3
    },
    {
        name : "학사",
        id : 4
    },
    {
        name : "역량",
        id : 5
    },
    {
        name : "봉사",
        id : 6
    },
    {
        name : "생활",
        id : 7
    },
    {
        name : "상담",
        id : 8
    },
    {
        name : "편의",
        id : 9
    },
]

const CItem = styled(SwiperSlide)`
    background-color: ${props => props.isActive ? "rgb(126, 172, 139)" : "white"};
    margin: 5px 0.3px;
    border-radius: 10px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    color : ${props => props.isActive ? "white" : "black"};
    box-shadow:${props => props.isActive ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" : "rgba(0, 0, 0, 0.16) 0px 1px 4px"};
    transition: all 0.25s linear;
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
    height: 32vh;
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
    border-radius: 7px;
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
    const navigate = useNavigate();

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

    // 데이터들
    const [info, SetInfo] = useRecoilState(isInfo);

    useEffect(()=>{
        getData();
    },[])

    const getData = async() => {
        try{
            const data = await API.get(``);
            SetInfo(data.data.facilities);
            setCate(data.data.categories);
        }catch(error){
            console.log(error)
        }
    }

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

    // 카테고리 클릭
    const [where, setWhere] = useRecoilState(isClick);
    const [cate, setCate] = useRecoilState(isCate);
    const [btnClick, setBtnClick] = useState(10);
    // 어떤 카테고리를 눌렀는지
    const CategoryClick = async(event ,i) => {
        // 전채를 누른 경우 색 다시 들어오게
        if(i.id === 10){
            try{
                const data = await API.get(``);
                setWhere(0);
                SetInfo(data.data.facilities);
                setCate(data.data.places);
                
                setWhere([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);
                setBtnClick(10);
                console.log(data.data.places);
            }catch(error){
                console.log(error);
            }
        }else{
            try{
                const id = i.id
                const data = await API.get(`/categoryget/${id}`);
                //console.log(data);
                SetInfo(data.data.facilities);
                setCate(data.data.places);
                
                setWhere((prev) => {
                    const array = [];
                    for(let i = 0 ; i < data.data.places.length ; i++){
                        const put = data.data.places[i]
                        array.push(...Object.values(put))
                    }
                    return array
                });

                setBtnClick(parseInt(id));
                
                console.log(data.data.places);
            }catch(error){
                console.log(error)
            }
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
                    {catelist.map((i) => (
                        <CItem onClick={(event) => CategoryClick(event , i)} isActive={btnClick === i.id ? true : false} key={i.id} value={i.name}>
                            {i.name}
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
                        {cate.map((i) => (
                            <LItem  key={Object.values(i)} >
                                {Object.keys(i)}
                            </LItem>
                        ))}
                    </Swiper>
                </ListHeader>
                <ListDiv/>
                <ItemBox id="realList">
                    {/* 검색 리스트가 쭉 뜨는 곳 */}
                    {info.map(i => (
                    <Item onClick={()=>navigate(`/detail/${i.id}`)} key={i.id}>
                        <Info>
                            <span>{i.category}</span>
                            <h6>{i.name}</h6>
                            <FooterInfo>
                                <Pin icon={faLocationDot}/>
                                <p>{i.where} {i.floor}층</p>
                            </FooterInfo>
                        </Info>
                        <ItemImg src={i.img == "" ? defaultImg : `data:image/jpeg;base64,${i.img}`}/>
                    </Item>
                    ))}
                </ItemBox>
                </ListContainer>
            </ListBox>
        </Container>
    )
}
export default Body;