import React from "react";
import {WrapperCards, Title, Text,Image, IndividualCards} from "./CardsStyles.jsx";
import ImgBlacklist from "../../assets/images/icon-blacklist.svg";
import ImgText from "../../assets/images/icon-text.svg";
import ImgPreview from "../../assets/images/icon-preview.svg";

function Cards(){
    return(
        <WrapperCards>
            <IndividualCards>
                <Image src={ImgBlacklist} />
                <Title>Create blacklists</Title>
                <Text>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</Text>
            </IndividualCards>
            
            <IndividualCards>
                <Image src={ImgText} />
                <Title>Plain text snippets</Title>
                <Text>Remove unwanted formatting from copied text for a consistent look.</Text>
            </IndividualCards>

            <IndividualCards>
                <Image src={ImgPreview} />
                <Title>Sneak preview</Title>
                <Text>Quick preview of all snippets on your Clipboard for easy access.</Text>
            </IndividualCards>
        </WrapperCards>

    )
}

export default Cards


