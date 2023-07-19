import { ContainerFooter, ImageLogo, TextFooter, Text, SocialMedia, ImgSocialMedia,SocialMediaLink } from "./FooterStyle";
import ImgLogo from "../../assets/images/logo.svg";
import LgFacebook from "../../assets/images/icon-facebook.svg";
import LgInstagram from "../../assets/images/icon-instagram.svg";
import LgTwitter from "../../assets/images/icon-twitter.svg";


export default function Footer(){

    return(
        <ContainerFooter>
            <ImageLogo src={ImgLogo} />
            <TextFooter>
                <Text href="#">FAQs</Text>
                <Text href="#">Contact Us</Text>
                <Text href="#">Privacy Policy</Text>
                <Text href="#">Press Kit</Text>
                <Text href="#">Install Guide</Text>
            </TextFooter>
            <SocialMedia>                              
                <SocialMediaLink href="#" >
                    <ImgSocialMedia src={LgFacebook}/>
                    </SocialMediaLink>
                <SocialMediaLink href="#">
                    <ImgSocialMedia src={LgTwitter}/>
                </SocialMediaLink>
                <SocialMediaLink href="#">
                    <ImgSocialMedia src={LgInstagram}/> 
                </SocialMediaLink>
            </SocialMedia>    
        </ContainerFooter>
    )


}