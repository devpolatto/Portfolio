import React, { ReactNode } from 'react';

import { Container } from './styles';

type TitleProps = {
    text: string;
    children?: ReactNode;
}

const Title = (props: TitleProps) => {
    return (
        <Container>
            {props.text}
        </Container>
    );
}

export default Title;