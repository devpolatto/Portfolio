import { AnchorHTMLAttributes } from 'react'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    text: string;
}

import { Container } from './styles';

const Button: React.FC<AnchorProps> = (props: AnchorProps) => {
  return(
    <Container>
        <a {...props}>{props.text}</a>
    </Container>
  );
}

export default Button;