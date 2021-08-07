import React from 'react';

import { FaGithub } from 'react-icons/fa'

import Title from '../components/Title';
import ProjectGrid from '../components/ProjectGrid';
import Button from '../components/Button';

import LayoutContainer from '../components/LayoutContainer';

const Projects: React.FC = () => {
    return (
        <LayoutContainer>
            <Title text="Projetos" />
            <ProjectGrid/>
            <Button 
                text="Ver mais projetos no Github" 
                href="https://github.com/devpolatto?tab=repositories"
                target="_blank"
            >
                <FaGithub className="icon" />
            </Button>
        </LayoutContainer>
    );
}

export default Projects;