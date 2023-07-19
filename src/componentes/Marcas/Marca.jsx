import { Wrapper, Images } from "./MarcaStyle"
import ImgGoogle from "../../assets/images/logo-google.png"
import ImgIbm from "../../assets/images/logo-ibm.png"
import ImgMicrosoft from "../../assets/images/logo-microsoft.png"
import ImgHp from "../../assets/images/logo-hp.png"
import ImgVt from "../../assets/images/logo-vector-graphics.png"

export default function Marca(){

    return (
        <Wrapper>
            <Images src={ImgGoogle} />
            <Images src={ImgIbm}/>
            <Images src={ImgMicrosoft}/>
            <Images src={ImgHp}/>
            <Images src={ImgVt}/>
        </Wrapper>
    )

}