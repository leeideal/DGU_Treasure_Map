import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 15px 0px;
    padding: 0px 5px;
`

const Title = styled.div`
    font-family: "Cafe24Ohsquare";
    color: #98D4BF;
    text-align: center;
    font-size: 23px;
`

const Form = styled.form`
    position: relative;
`
const Input = styled.input`
    border:2px solid #98D4BF;
    border-radius: 15px;
    color :#98D4BF;
    font-size: 17px;
    padding: 8px;
    ::placeholder {
        color: #A2A2A6;
    }
    :focus {
        border:2px solid #98D4BF;
    }
    //#C7E2DD
`
const Icon = styled(FontAwesomeIcon)`
    color: #98D4BF;
    font-size: 26px;
    position: absolute;
    top:8px;
    right: 13px;
`

function Header() {
    const {register, handleSubmit, setValue} = useForm();
    const onValid = (data) => {
        console.log(data);
        setValue("where", "");
    }
    return (
        <Container>
            <Title>
                동국<br />보물지도
            </Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <Input {...register("where", {required : true})} placeholder="건물, 시설 검색" />
                <Icon icon={faMagnifyingGlass} />
            </Form>
        </Container>
    );
}

export default Header;