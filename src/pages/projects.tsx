import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa'

import letmeaskPreview from '../../public/letmeask.png';
import plantmanagerPreview from '../../public/plantmanager.png';
import jsPreview from '../../public/javascript.png';

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
                        <ProjectTitle>LetmeAsk</ProjectTitle>
                        <Description>
                            This is a project developed during Next Level Week # 6, presented by @Rocketseat.
                        </Description>
                    </ProjectDescription>
                    <ProjectPreview>
                        <Image src={letmeaskPreview} placeholder="blur" />
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
                        <Image src={plantmanagerPreview} placeholder="blur" />
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
                        <Image src={jsPreview} placeholder="blur" />
                    </ProjectPreview>
                </Project>
                <SeeMoreFooter>
                    <Link href="https://github.com/devpolatto?tab=repositories" >
                        <div className="see-more">
                            Ver mais projetos no Github <FaGithub className="githubicon" />
                        </div>
                    </Link>
                </SeeMoreFooter>
            </ProjectGrid>

        </Container>
    );
}

export default Projects;