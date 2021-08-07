import { AnchorHTMLAttributes, ReactNode } from 'react'
import Image from 'next/image';

import { FaCode } from 'react-icons/fa';

interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    projectName: string;
    description?: string;
    projectPreview?: ReactNode
}

import { 
    Container,
    ProjectDescription,
    ProjectTitle,
    Description,
    ProjectPreview
} from './styles';

const CardProject: React.FC<CardProps> = (props: CardProps) => {
  return(
    <Container {...props}>
        <ProjectDescription>
            <ProjectTitle>{props.projectName}</ProjectTitle>
            <Description>{props.description}</Description>
        </ProjectDescription>
        <ProjectPreview>{props.projectPreview}</ProjectPreview>
    </Container>
  );
}

export default CardProject;