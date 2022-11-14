import styled from "styled-components";
import back from "../../img/back.png";
import culture from "../../img/culture.png";
import e1 from "../../img/e1.png";
import e2 from "../../img/e2.png";
import eating from "../../img/eating.png";
import eight from "../../img/eight.png";
import ground from "../../img/ground.png";
import gym from "../../img/gym.png";
import haklem from "../../img/haklem.png";
import hh from "../../img/hh.png";
import law from "../../img/law.png";
import library from "../../img/library.png";
import main from "../../img/main.png";
import management from "../../img/management.png";
import man from "../../img/man.png";
import multi from "../../img/multi.png";
import myungjin from "../../img/myungjin.png";
import scholarship from "../../img/scholarship.png";
import science from "../../img/science.png";
import square from "../../img/square.png";
import ss from "../../img/ss.png";
import student from "../../img/student.png";
import ic from "../../img/ic.png";
import { API } from "../../axios";
import { useRecoilState } from "recoil";
import { isClick, isInfo } from '../../atom';
import { useState } from "react";
import { motion, Variants} from "framer-motion";

const Container = styled.div`
    margin-top: 15px;
`

const Inner = styled.div`
    width: 100%;
    position: relative;
    background-color: #C7E2DD;
`
const Back = styled.img`
    width: 100%;
    background-color: #C7E2DD;
    padding-right: 10px;
`

const ItemBox = styled.div`
    position: absolute;
    top : 0;
    left : 0;
    @media screen and (min-width: 400px) {
        top: 15px;
        left : 15px;
    }
    @media screen and (max-width: 380px) {
        top: -10px;
        left : -10px;
    }
`

// 가장 작은
const Item = styled(motion.img)`
    position: absolute;
    width: 30px;
    top : ${props => props.top};
    left : ${props => props.left};
    opacity: ${props => props.isActive ? 1 : 0.5};
`

// 두번째 크기
const Item2 = styled(motion.img)`
    position: absolute;
    width: 37px;
    top : ${props => props.top};
    left : ${props => props.left};
    opacity: ${props => props.isActive ? 1 : 0.5};
`

// 세번째 크기
const Item3 = styled(motion.img)`
    position: absolute;
    width: 40px;
    top : ${props => props.top};
    left : ${props => props.left};
    opacity: ${props => props.isActive ? 1 : 0.5};
`

// 4번째 크기
const Item4 = styled(motion.img)`
    position: absolute;
    width: 50px;
    top : ${props => props.top};
    left : ${props => props.left};
    opacity: ${props => props.isActive ? 1 : 0.5};
`

// 가장 큰 크기
const Item5 = styled(motion.img)`
    position: absolute;
    width: 70px;
    top : ${props => props.top};
    left : ${props => props.left};
    opacity: ${props => props.isActive ? 1 : 0.5};
`

function Map() {
    const [info, SetInfo] = useRecoilState(isInfo);
    const [where, setWhere] = useRecoilState(isClick);

    const Click = async(event) => {
        try{
            const id = event.target.id
            const data = await API.get(`/placeget/1`);
            setWhere(parseInt(id));
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <Container>
            <Inner>
                <Back src={back} />
                <ItemBox>
                <Item onClick={(event) => Click(event)} id={19} isActive={where === 19 || where === 0 ? true : false} src={scholarship} top="240px" left="68px"/> {/* 학술문화관 */}
                <Item2 onClick={(event) => Click(event)} id={18} isActive={where === 18 || where === 0 ? true : false} src={culture} top="230px" left="90px" /> {/* 문화관 */}
                <Item2 onClick={(event) => Click(event)} id={17} isActive={where === 17 || where === 0 ? true : false} src={ss} top="185px" left="55px" /> {/* 사회과학관 */}
                <Item2 onClick={(event) => Click(event)} id={9} isActive={where === 9 || where === 0 ? true : false} src={hh} top="180px" left="100px" /> {/* 헤화관 */}
                <Item onClick={(event) => Click(event)} id={16} isActive={where === 16 || where === 0 ? true : false} src={management} top="150px" left="35px" /> {/* 경영관 */}
                <Item3 onClick={(event) => Click(event)} id={10} isActive={where === 10 || where === 0 ? true : false} src={man} top="140px" left="118px" /> {/* 만해관 */}
                <Item3 onClick={(event) => Click(event)} id={11} isActive={where === 11 || where === 0 ? true : false} src={law} top="180px" left="145px" /> {/* 법학관 */}
                <Item5 onClick={(event) => Click(event)} id={20} isActive={where === 20 || where === 0 ? true : false} src={ground} top="110px" left="60px" /> {/* 대운동장 */}
                <Item2 onClick={(event) => Click(event)} id={12} isActive={where === 12 || where === 0 ? true : false} src={myungjin} top="80px" left="135px" /> {/* 명진관 */}
                <Item3  src={eight} top="127px" left="165px" /> {/* 팔정도 */}

                <Item onClick={(event) => Click(event)} id={4} isActive={where === 4 || where === 0 ? true : false} src={science} top="45px" left="115px" /> {/* 과학관 */}
                <Item2 onClick={(event) => Click(event)} id={14} isActive={where === 14 || where === 0 ? true : false} src={eating} top="25px" left="160px" /> {/* 상록원 */}
                <Item2 onClick={(event) => Click(event)} id={13} isActive={where === 13 || where === 0 ? true : false} src={e1} top="25px" left="208px" /> {/* 신공학관 */}
                <Item2 onClick={(event) => Click(event)} id={3} isActive={where === 3 || where === 0 ? true : false} src={e2} top="40px" left="255px" /> {/* 원흥관 */}
                <Item3 onClick={(event) => Click(event)} id={15} isActive={where === 15 || where === 0 ? true : false} src={library} top="93px" left="175px" /> {/* 도서관 */}
                <Item4 onClick={(event) => Click(event)} id={8} isActive={where === 8 || where === 0 ? true : false} src={main} top="115px" left="209px" /> {/* 본관 */}

                <Item3 onClick={(event) => Click(event)} id={1} isActive={where === 1 || where === 0 ? true : false} src={ic} top="100px" left="264px" /> {/* 정보문화관 */}
                <Item2 onClick={(event) => Click(event)} id={2} isActive={where === 2 || where === 0 ? true : false} src={student} top="135px" left="300px" /> {/* 학생회관 */}
                <Item4 onClick={(event) => Click(event)} id={22} isActive={where === 22 || where === 0 ? true : false} src={square} top="160px" left="250px" /> {/* 만해광장 */}
                <Item onClick={(event) => Click(event)} id={5} isActive={where === 5 || where === 0 ? true : false} src={multi} top="160px" left="200px" /> {/* 다향관 */}
                <Item onClick={(event) => Click(event)} id={7} isActive={where === 7 || where === 0 ? true : false} src={gym} top="200px" left="240px" /> {/* 체육관 */}
                <Item3 onClick={(event) => Click(event)} id={6} isActive={where === 6 || where === 0 ? true : false} src={haklem} top="185px" left="290px" /> {/* 학림관 */}
                </ItemBox>
            </Inner>
        </Container>
    )
}

export default Map;