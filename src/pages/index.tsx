import Image from 'next/image'
import Link from 'next/link';

import styles from '../../styles/Home/Home.module.css'

import Title from '../components/Title';

import Avatar from '../../public/avatar.png';
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

import { Cover, AboutMe, Footer } from '../../styles/Home/styles';

export default function Home() {
  return (
    <div className={styles.container}>
      <Cover id="cover">
        <div className="title">
          <div className="content">
            <div className="name">Angelo Polatto</div>
            <div className="office">Técnico de <span>TI</span> &</div>
            <div className="office">Desenvolvedor <span>MERN</span> stack</div>
          </div>
        </div>
        <div className="lottie">
          <Image src="/Dev2.svg" width="600" height="600" />
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
        
      </Footer>
    </div>
  )
}
