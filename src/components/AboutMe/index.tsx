import Image from 'next/image';

import Title from '../Title';
import Button from '../Button';
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
} from '../TechsImg/index';

import AvatarImg from '../../../public/avatar.jpg';

import { 
  Container, 
  Content, 
  Avatar, 
  Technologies, 
  Description 
} from './styles';

const AboutMe: React.FC = () => {
  return(
    <Container id="about-me">
      <Title text={'Sobre mim'} />
      <Content>
        <Avatar>
          <Image src={AvatarImg} alt="Avatar" />
        </Avatar>
        <Description>
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
          <Technologies>
              <HTMLImg />
              <CSSImg />
              <JsImgSVG />
              <ReactImg />
              <SassImg />
              <NodeImg />
              <GitImg />
              <PostgresqlImg />
              <MongoImg />
          </Technologies>
          <Button text="Download - CV" href="/AngeloPolatto.pdf" download/>
        </Description>
      </Content>
    </Container>
  );
}

export default AboutMe;