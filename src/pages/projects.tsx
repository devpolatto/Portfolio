import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa'

import letmeaskPreview from '../../public/letmeask.png';
import plantmanagerPreview from '../../public/plantmanager.png';
import jsPreview from '../../public/javascript.png';

import Title from '../components/Title';
import CardProject from '../components/CardProject';

import {
    Container,
    ProjectGrid,
    SeeMoreFooter
} from '../../styles/projects/index';

const Projects: React.FC = () => {
    return (
        <Container>
            <Title text="Projetos" />
            <ProjectGrid>
                <CardProject 
                    href="https://github.com/devpolatto/Letmeask_NLW-6/#readme"
                    target="_blank"
                    projectName="LetmeAsk"
                    description="This is a project developed during Next Level Week # 6, presented by @Rocketseat."
                    projectPreview={( 
                        <Image src={letmeaskPreview} placeholder="blur" />
                    )}
                />
                <CardProject 
                    href="https://github.com/devpolatto/PlantManager_NLW5/#readme"
                    target="_blank"
                    projectName="Plant Manager"
                    description="This is a project developed during Next Level Week # 5, presented by @Rocketseat."
                    projectPreview={( 
                        <Image src={plantmanagerPreview} placeholder="blur" />
                    )}
                />
                <CardProject 
                    href="https://github.com/devpolatto/Move.it_NLW4/#readme"
                    target="_blank"
                    projectName="Move.it"
                    description="This is a project developed during Next Level Week # 4."
                    projectPreview={( 
                        <Image src={jsPreview} placeholder="blur" alt="imagePreview"/>
                    )}
                />
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