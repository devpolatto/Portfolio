import Image from 'next/image'

import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

import { Container ,Cover } from '../../styles/Home/styles';

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
          <Image src="/Developer-vector.svg" width="600" height="600" alt="vector"/>
        </div>
      </Cover>

      <AboutMe/>
      <Footer/>
    </Container>
  )
}
