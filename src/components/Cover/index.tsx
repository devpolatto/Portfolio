import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';

import { 
    Container,
    Content,
    Title,
    ImagePik
} from './styles';

const Cover: React.FC = () => {

    const [cursorSpan, setCursorSpan ] = useState(true);
    let [ typeTextSpan, setTypeTextSpan ] = useState('')

    const textArray = ["Front-end", "MERN Stack"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 1950; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type(){
        if (charIndex < textArray[textArrayIndex].length) {
            setCursorSpan(false)
            setTypeTextSpan(typeTextSpan += textArray[textArrayIndex].charAt(charIndex))
            charIndex++;
            setTimeout(type, typingDelay);
          } else{
            setCursorSpan(true)
            setTimeout(erase, newTextDelay);
          }
    }
    function erase() {
        if (charIndex > 0) {
            setCursorSpan(false)
            setTypeTextSpan(typeTextSpan = textArray[textArrayIndex].substring(0, charIndex-1))
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            setCursorSpan(true)
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1000);
        }
    }

    useEffect(() => {
        if(textArray.length) setTimeout(type, newTextDelay + 250)
    }, [])

    return(
        <Container id="cover">
            <Content>
                <Title>
                    <h1 className="name">Angelo Polatto</h1>
                    <h3 className="office">Técnico de <span>TI</span> &</h3>
                    <h3 className="office">Desenvolvedor  
                        <span className="typed-text">{` ${typeTextSpan}`}</span>
                        <span className={`cursor ${cursorSpan === false ? 'typing' : ''}`}>&nbsp;</span>
                    </h3>
                </Title>
            </Content>
            <ImagePik>
                <Image src="/Developer-vector.svg" width="600" height="600" alt="vector"/>
            </ImagePik>
        </Container>
    );
}

export default Cover;
