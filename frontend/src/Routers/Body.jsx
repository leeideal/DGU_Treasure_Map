import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Map from './Map';

const Container = styled.div`
    width: 100%;
    background-color: #C7E2DD;
    margin-top: 10px;
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
`


function Body() {
    // 어떤 카테고리를 눌렀는지
    const CategoryClick = (event) => {
        console.log(event.currentTarget.innerText);
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
                    className="mySwiper"
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
        </Container>
    )
}
export default Body;