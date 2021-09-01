import Image from 'next/image';

import CardProject from '../CardProject';

import letmeaskPreview from '../../../public/letmeask.png';
import plantmanagerPreview from '../../../public/plantmanager.png';
import jsPreview from '../../../public/javascript.png';
import DashlaneClone from '../../../public/DashlaneClone.png'

import { Container, WrapperContainer } from './styles';

const ProjectGrid: React.FC = () => {
  return(
    <Container>
        <WrapperContainer>
            <CardProject 
                href="https://github.com/devpolatto/Letmeask_NLW-6/#readme"
                target="_blank"
                projectName="LetmeAsk"
                description="This is a project developed during Next Level Week # 6, presented by @Rocketseat."
                projectPreview={( 
                    <Image src={letmeaskPreview} placeholder="blur" alt="projectPreview"/>
                )}
            />
            <CardProject 
                href="https://github.com/devpolatto/PlantManager_NLW5/#readme"
                target="_blank"
                projectName="Plant Manager"
                description="This is a project developed during Next Level Week # 5, presented by @Rocketseat."
                projectPreview={( 
                    <Image src={plantmanagerPreview} placeholder="blur" alt="projectPreview"/>
                )}
            />
            <CardProject 
                href="https://github.com/devpolatto/Dashlane-clone#readme"
                target="_blank"
                projectName="Dashlane"
                description="Dashlane clone project"
                projectPreview={( 
                    <Image src={DashlaneClone} placeholder="blur" alt="imagePreview"/>
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
        </WrapperContainer>
    </Container>
  );
}

export default ProjectGrid;