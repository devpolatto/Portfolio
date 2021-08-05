import Image from 'next/image'
import Link from 'next/link';
import { 
  FaClipboard, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaWhatsapp 
} from 'react-icons/fa'

import Title from '../components/Title';
import Avatar from '../../public/avatar.png';
import { Container ,Cover, AboutMe, Footer } from '../../styles/Home/styles';
import {
  ReactImg,
  JsImgSVG,
  NodeImg,
  HTMLImg,
  CSSImg,
  GitImg,
  SassImg,
  PostgresqlImg,
  MongoImg,
} from '../components/TechsImg/index';

export default function Home() {
  return (
    <Container>
      <Cover id="cover">
        <div className="title">
          <div className="content">
            <div className="name">Angelo Polatto</div>
            <div className="office">Técnico de <span>TI</span> &</div>
            <div className="office">Desenvolvedor <span>MERN</span> stack</div>
          </div>
        </div>
        <div className="vector">
          <Image src="/Dev2.svg" width="600" height="600" alt="vector"/>
        </div>
      </Cover>

      <AboutMe id="about-me">
        <Title text={'Sobre mim'} />
        <div className="content">
          <div className="avatar-img">
            <Image src={Avatar} alt="Avatar" />
          </div>
          <div className="about-me-description">
            <p>
              Olá! Seja muito bem vindo.
              <br />
              <br />
              Meu nome é Angelo Polatto, tenho 22 anos, e moro em Recife, PE.
              Sou formado em redes de computadores pela Universidade UNIBRA(Centro Universitário Brasileiro).
              Há mais de 4 anos venho atuando na área de infraestrutura de redes, opero com diversos equipamentos,
              como Switchs, Roteadores, Firewall(especificamente o FortiGate), gosto muito de trabalhar utilizando
              Linux(Ubuntu), monitoramento de rede com Zabbix e várias outras coisas.<br /><br />
              Porém, nos bastidores é onde eu mais gosto de passar meu tempo, por que é onde construo e fortaleço
              minhas habilidades e conhecimentos, tudo em prol de um único objetivo, ser um desenvolvedor, de
              preferência um dev Front-end, pois gosto muito da parte visual, a interação com a interface,
              animações, etc. Hoje, com estas tecnologias abaixo, sei que posso fazer muita coisa, e espero fazer 
              ainda mais ao lado de pessoas que compartilham do mesmo sentimento.
            </p>
            <div className="techs">
              <HTMLImg />
              <CSSImg />
              <JsImgSVG />
              <ReactImg />
              <SassImg />
              <NodeImg />
              <GitImg />
              <PostgresqlImg />
              <MongoImg />
            </div>
            <a className="download-cv" href="/AngeloPolatto.pdf" download>Download CV</a>
          </div>
        </div>
      </AboutMe>

      <Footer>
        <Title text="Contact-me" />
        <div className="contact-list">
          <div className="contact-icons">
            <Link href="https://www.instagram.com/angelopolatto/">
              <FaInstagram className="contact-item" color="white"/>
            </Link>
            <Link href="https://www.linkedin.com/in/angelo-polatto-04121998/">
              <FaLinkedinIn className="contact-item" color="white"/>
            </Link>
            <Link href="https://github.com/devpolatto">
              <FaGithub className="contact-item" color="white"/>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5581999766539&text=Angelo%20Polatto">
              <FaWhatsapp className="contact-item" color="white" />
            </Link>
          </div>
          <div className="mail">
            <h5 className="mail-clipboard">
              polatto.xcode.job@gmail.com
            </h5>
            <span>
              <FaClipboard className="cliboard" color="white" />
            </span>
          </div>
        </div>
        <h3><i>Desenvolvido por Angelo Polatto</i></h3>
      </Footer>
    </Container>
  )
}
