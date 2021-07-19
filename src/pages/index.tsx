import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { useEffect } from 'react';

import styles from '../../styles/Home/Home.module.css'

import Lottie from 'react-lottie';
import DeveloperAnimation from '../../public/developerAnimation.json';

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

import { Cover, AboutMe } from '../../styles/Home/styles';

export default function Home() {

  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: DeveloperAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

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
          <Lottie options={defaultOptionsLottie} height={"100%"} width={"100%"} />
        </div>
      </Cover>

      <AboutMe id="about-me">
        <Title text={'Sobre mim'} />
        <div className="content">
          <div className="avatar-img">
            <Image src={Avatar} alt="Avatar" className="" />
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
              minhas habilidade e conhecimentos, tudo em prol de um único objetivo, ser um desenvolvedor, de
              preferência um dev Front-end, pois gosto muito da parte visual, a interação com a interface,
              animações, etc.
              <br />
              <br />
              Tive meu primeiro contato com código em 2016, quando me deparei com a linguagem #C durante um curso
              de informática logo depois da escola, porém não foi tão legal, muitas dúvidas e poucas respostas.
              Mas as coisas foram mudando logo após entrar na faculdade e conhecer pessoas que gostavam do assunto,
              então fui conhecendo novas tecnologias, com o PHP, consegui fazer algumas aplicações legais, aquele
              velho CRUD que nos persegue, mas sentia que faltava algo, era como se nada do que codificasse,
              realmente funcionasse, ou até mesmo tivesse valor.
              <br />
              <br />
              Então, em 2020, fui
              apresentado com maestria ao universo JavaScript, descobre muito mais que o famoso <i>document.</i> e
              o <i>$()</i>, e foi aí que percebi como podia sair da estagnação
              onde me encontrava. Eu sei, a estrada é longa, o bug é eterno, mas a minha persistência também. Hoje,
              com estas tecnologias abaixo, sei que posso fazer muita coisa, e espero fazer ainda mais ao lado de
              pessoas que compartilham do mesmo sentimento.
            </p>
            <div className="techs">
              <HTMLImg />
              <CSSImg />
              <SassImg />
              <JsImgSVG />
              <ReactImg />
              <NodeImg />
              <GitImg />
              <PostgresqlImg />
              <MongoImg />
            </div>
            <a className="download-cv" href="/AngeloPolatto.pdf" download>Download CV</a>
          </div>
        </div>
      </AboutMe>
    </div>
  )
}
