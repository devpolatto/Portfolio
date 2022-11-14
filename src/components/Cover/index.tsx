import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa'

import { 
    Container,
    Content,
    Title,
    ImagePik,
    ChevronDownContainer,
    Name,
    Skill,
    TitleStack
} from './styles';

const Cover: React.FC = () => {

    const [cursorSpan, setCursorSpan ] = useState(true);
    let [ typeTextSpan, setTypeTextSpan ] = useState('')

    const textArray = ["Front-end", "MERN Stack"];
    const typingDelay = 100;
    const erasingDelay = 80;
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
        textArray.length && setTimeout(type, 3050)
    }, [])

    return(
        <Container id="cover">
            <Content>
                <Title>
                    <Name className='text-gradient'>Angelo Polatto</Name>
                    <TitleStack>
                        <Skill>Redes</Skill>
                        <span></span>
                        <Skill>MERN Stack</Skill>
                        <span></span>
                        <Skill>DevOps</Skill>
                    </TitleStack>
                </Title>
            </Content>
            <ImagePik>
                <Image src="/Developer-vector-1.svg" width="600" height="600" alt="vector"/>
            </ImagePik>
            <ChevronDownContainer>
                <FaChevronDown href="#about-me" className="ChevronDown ChevronDown1"/>
                <FaChevronDown href="#about-me" className="ChevronDown ChevronDown2"/>
                <FaChevronDown href="#about-me" className="ChevronDown ChevronDown3"/>
            </ChevronDownContainer>
        </Container>
    );
}

export default Cover;
