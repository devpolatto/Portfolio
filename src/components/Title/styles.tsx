import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 0;

  font-size: 1.75rem;
  color: var(--color-text-title);
  font-weight: 600;

  @media (min-width: 768px){
    font-size: 3rem;
    padding: 16px 0;
  }
`;

