import React from 'react';
import { 
    FaClipboard, 
    FaInstagram, 
    FaLinkedinIn, 
    FaGithub, 
    FaWhatsapp 
} from 'react-icons/fa'

import Title from '../Title';

import { 
    Container, 
    ContactList, 
    ContactLinks, 
    ContactMail ,
    ContactIcon,
    Author
} from './styles';

const Footer: React.FC = () => {
  return(
      <Container>
            <Title text="Contact-me" />
            <ContactList>
                <ContactLinks>
                    <ContactIcon href="https://www.instagram.com/angelopolatto/" rel="noopener noreferrer" target="_blank">
                        <FaInstagram className="icon" color="white"/>
                    </ContactIcon>
                    <ContactIcon href="https://www.linkedin.com/in/angelo-polatto-04121998/" rel="noopener noreferrer" target="_blank">
                        <FaLinkedinIn className="icon" color="white"/>
                    </ContactIcon>
                    <ContactIcon href="https://github.com/devpolatto" rel="noopener noreferrer" target="_blank">
                        <FaGithub className="icon" color="white"/>
                    </ContactIcon>
                    <ContactIcon href="https://api.whatsapp.com/send?phone=5581999766539&text=Angelo%20Polatto" rel="noopener noreferrer" target="_blank">
                        <FaWhatsapp size="50" className="icon" color="white" />
                    </ContactIcon>
                </ContactLinks>
                <ContactMail>
                    <h5 className="mail-clipboard">
                        polatto.xcode.job@gmail.com
                    </h5>
                    <span>
                        <FaClipboard className="cliboard" color="white" />
                    </span>
                </ContactMail>
            </ContactList>
            <Author>
                Desenvolvido por <span>Angelo Polatto</span>
            </Author>
      </Container>
  );
}

export default Footer;