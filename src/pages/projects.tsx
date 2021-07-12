import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'

import Title from '../components/Title';

import {
    Container,
    ProjectGrid,
    Project,
    ProjectDescription,
    ProjectTitle,
    Description,
    ProjectLink,
    ProjectPreview
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
                        <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
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
                        <img src="https://github.com/devpolatto/PlantManager_NLW5/raw/main/.github/plantmanager-preview.png" alt="" />
                    </ProjectPreview>
                </Project>

                <Project href="https://github.com/devpolatto/Move.it_NLW4/#readme" target="_blank">
                    <ProjectDescription>
                        <ProjectTitle>Plant Manager</ProjectTitle>
                        <Description>
                            This is a project developed during Next Level Week # 5, presented by @Rocketseat.
                            PlantManager is an application developed in order to help people who have plants
                            at home to remember to water them.
                        </Description>
                    </ProjectDescription>
                    <ProjectPreview>
                        <img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png" alt="" />
                    </ProjectPreview>
                </Project>

                <Project href="https://github.com/devpolatto/Letmeask_NLW-6/#readme" target="_blank">
                    <ProjectDescription>
                        <ProjectTitle>Letme Ask</ProjectTitle>
                        <Description>
                            This is a project developed during Next Level Week # 6, presented by @Rocketseat.
                        </Description>
                    </ProjectDescription>
                    <ProjectPreview>
                        <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
                    </ProjectPreview>
                </Project>

                <Project href="https://github.com/devpolatto/Letmeask_NLW-6/#readme" target="_blank">
                    <ProjectDescription>
                        <ProjectTitle>Letme Ask</ProjectTitle>
                        <Description>
                            This is a project developed during Next Level Week # 6, presented by @Rocketseat.
                        </Description>
                    </ProjectDescription>
                    <ProjectPreview>
                        <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
                    </ProjectPreview>
                </Project>
            </ProjectGrid>
        </Container>
    );
}

export default Projects;