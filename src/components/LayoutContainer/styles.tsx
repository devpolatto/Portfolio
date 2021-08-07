import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 2000px;
  margin-top: 62px;

  @media (min-width: 768px){
    margin-top: 72px;
  }

  @media (min-width: 1024px){
    margin-top: 75px;
  }
`;
