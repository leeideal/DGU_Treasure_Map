import styled from "styled-components";
import back from "../img/back.png";
import culture from "../img/culture.png";
import e1 from "../img/e1.png";
import e2 from "../img/e2.png";
import eating from "../img/eating.png";
import eight from "../img/eight.png";
import ground from "../img/ground.png";
import gym from "../img/gym.png";
import haklem from "../img/haklem.png";
import hh from "../img/hh.png";
import law from "../img/law.png";
import library from "../img/library.png";
import main from "../img/main.png";
import management from "../img/management.png";
import man from "../img/man.png";
import multi from "../img/multi.png";
import myungjin from "../img/myungjin.png";
import scholarship from "../img/scholarship.png";
import science from "../img/science.png";
import square from "../img/square.png";
import ss from "../img/ss.png";
import student from "../img/student.png";
import ic from "../img/ic.png";

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
const Item = styled.img`
    position: absolute;
    width: 30px;
    top : ${props => props.top};
    left : ${props => props.left};
    //opacity: 0.4;
`

// 두번째 크기
const Item2 = styled.img`
    position: absolute;
    width: 37px;
    top : ${props => props.top};
    left : ${props => props.left};
    //opacity: 0.4;
`

// 세번째 크기
const Item3 = styled.img`
    position: absolute;
    width: 45px;
    top : ${props => props.top};
    left : ${props => props.left};
    //opacity: 0.4;
`

// 4번째 크기
const Item4 = styled.img`
    position: absolute;
    width: 50px;
    top : ${props => props.top};
    left : ${props => props.left};
    //opacity: 0.4;
`

// 가장 큰 크기
const Item5 = styled.img`
    position: absolute;
    width: 70px;
    top : ${props => props.top};
    left : ${props => props.left};
    //opacity: 0.4;
`

function Map() {
    return(
        <Container>
            <Inner>
                <Back src={back} />
                <ItemBox>
                <Item src={scholarship} top="240px" left="68px" /> {/* 학술문화관 */}
                <Item2 src={culture} top="230px" left="90px" /> {/* 문화관 */}
                <Item2 src={ss} top="185px" left="55px" /> {/* 사회과학관 */}
                <Item2 src={hh} top="180px" left="100px" /> {/* 헤화관 */}
                <Item src={management} top="150px" left="35px" /> {/* 경영관 */}
                <Item3 src={man} top="140px" left="118px" /> {/* 만해관 */}
                <Item3 src={law} top="180px" left="145px" /> {/* 법학관 */}
                <Item5 src={ground} top="110px" left="60px" /> {/* 대운동장 */}
                <Item2 src={myungjin} top="80px" left="135px" /> {/* 명진관 */}
                <Item3 src={eight} top="127px" left="165px" /> {/* 팔정도 */}

                <Item src={science} top="45px" left="115px" /> {/* 과학관 */}
                <Item2 src={eating} top="25px" left="160px" /> {/* 상록원 */}
                <Item2 src={e1} top="25px" left="208px" /> {/* 신공학관 */}
                <Item2 src={e2} top="40px" left="255px" /> {/* 원흥관 */}
                <Item3 src={library} top="93px" left="175px" /> {/* 도서관 */}
                <Item4 src={main} top="115px" left="209px" /> {/* 본관 */}

                <Item3 src={ic} top="100px" left="264px" /> {/* 정보문화관 */}
                <Item2 src={student} top="135px" left="300px" /> {/* 학생회관 */}
                <Item4 src={square} top="160px" left="250px" /> {/* 만해광장 */}
                <Item src={multi} top="160px" left="200px" /> {/* 다향관 */}
                <Item src={gym} top="200px" left="240px" /> {/* 체육관 */}
                <Item3 src={haklem} top="185px" left="290px" /> {/* 학림관 */}
                </ItemBox>
            </Inner>
        </Container>
    )
}

export default Map;