import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa'

import letmeask from '../../public/letmeask.png';
import plantmanager from '../../public/plantmanager.png';
import js from '../../public/javascript.png';

import Title from '../components/Title';

import {
    Container,
    ProjectGrid,
    Project,
    ProjectDescription,
    ProjectTitle,
    Description,
    ProjectPreview,
    SeeMoreFooter
} from '../../styles/projects/index';

const Projects: React.FC = () => {
    return (
        <Container>
            <Title text="Projetos" />
            <ProjectGrid>
                <Project href="https://github.com/devpolatto/Letmeask_NLW-6/#readme" target="_blank">
                    <ProjectDescription>
                        <ProjectTitle>Letme Ask</ProjectTitle>
                        <Description>
                            This is a project developed during Next Level Week # 6, presented by @Rocketseat.
                        </Description>
                    </ProjectDescription>
                    <ProjectPreview>
                        <Image src={letmeask} placeholder="blur" />
                    </ProjectPreview>
                </Project>

                <Project href="https://github.com/devpolatto/PlantManager_NLW5/#readme" target="_blank">
                    <ProjectDescription>
                        <ProjectTitle>Plant Manager</ProjectTitle>
                        <Description>
                            This is a project developed during Next Level Week # 5, presented by @Rocketseat.
                            PlantManager is an application developed in order to help people who have plants
                            at home to remember to water them.
                        </Description>
                    </ProjectDescription>
                    <ProjectPreview>
                        <Image src={plantmanager} placeholder="blur" />
                    </ProjectPreview>
                </Project>

                <Project href="https://github.com/devpolatto/Move.it_NLW4/#readme" target="_blank">
                    <ProjectDescription>
                        <ProjectTitle>Move.it</ProjectTitle>
                        <Description>
                            This is a project developed during Next Level Week # 4.
                        </Description>
                    </ProjectDescription>
                    <ProjectPreview>
                        <Image src={js} placeholder="blur" />
                    </ProjectPreview>
                </Project>
            </ProjectGrid>
            <SeeMoreFooter>
                <Link href="https://github.com/devpolatto?tab=repositories">
                    <div className="see-more">
                        Ver mais projeto no Github <FaGithub className="githubicon" />
                    </div>
                </Link>
            </SeeMoreFooter>
        </Container>
    );
}

export default Projects;