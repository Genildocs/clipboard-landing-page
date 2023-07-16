import {Wrapper, Image} from "./Images.styles.jsx";
import ImagePcSmart from "../../assets/images/image-devices.png"

export default function ImageComputerSmartphone(){
    return(
        <Wrapper>
            <Image src={ImagePcSmart} alt={"Computador e smartphone juntos"}/>
        </Wrapper>
    )
}