import Styled from "styled-components";
import BGHeader from "../../assets/images/bg-header-desktop.png";

export const HeaderContaner = Styled.div`
    background-image: url(${BGHeader});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`