import { ReactNode } from 'react';
import { AnchorHTMLAttributes } from 'react'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    text: string;
    children?: ReactNode;
}

import { Container } from './styles';

const Button: React.FC<AnchorProps> = (props: AnchorProps) => {
  return(
    <Container>
        <a {...props}>{props.text}{props.children}</a>
    </Container>
  );
}

export default Button;