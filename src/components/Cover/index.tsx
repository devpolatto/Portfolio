import Image from 'next/image';

import { 
    Container,
    Content,
    Title,
    ImagePik
} from './styles';

const Cover: React.FC = () => {
  return(
      <Container id="cover">
        <Content>
            <Title>
                <h1 className="name">Angelo Polatto</h1>
                <h3 className="office">Técnico de <span>TI</span> &</h3>
                <h3 className="office">Desenvolvedor <span>MERN</span> stack</h3>
            </Title>
        </Content>
        <ImagePik>
            <Image src="/Developer-vector.svg" width="600" height="600" alt="vector"/>
        </ImagePik>
      </Container>
  );
}

export default Cover;
