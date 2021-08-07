import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

import { Container } from './styles';

const LayoutContainer: React.FC<LayoutProps> = ({ children }) => {
  return(
      <Container>
        {children}
      </Container>
  );
}

export default LayoutContainer;