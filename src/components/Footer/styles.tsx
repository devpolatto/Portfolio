import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 16px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 16px;

    @media (min-width: 830px){
        flex-direction: row;
        gap: 100px;
        margin: 24px 0;
    }

    @media (min-width: 1200px){
        gap: 160px;
    }
`

export const ContactLinks = styled.div`
    width: 200px;
    height: auto;

    margin-top: 8px;

    display: flex;
    justify-content: space-between;

    @media (min-width: 830px){
        width: 360px;
    }
`

export const ContactIcon = styled.a`
    padding: 10px;

    cursor: pointer;

    border-radius: 8px;

    transition: 0.3s ease-in-out;

    &:hover{
        background-color: var(--color-theme);
        .icon{
            fill: var(--color-text-secundary);
        }
    }

    .icon{
        width: 21px;
        height: 21px;
    }

    @media (min-width: 830px){
        .icon{
            width: 40px;
            height: 40px;
        }
    }
`

export const ContactMail = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 16px;

    padding: 12px 24px;
    border-radius: 28px;
    background-color: var(--color-text-tertiary);

    cursor: pointer;

    transition: 0.2s ease-out;

    h5{
    color: var(--color-text-primary);
    font-size: 1rem;
    }

    span{
    margin-left: 8px;
    }

    &:hover{
      background-color: var(--color-text-secundary);
    }

    @media (min-width: 830px){
        padding: 16px 32px;

        h5{
          font-size: 1.5rem;
        }
    }

    @media (min-width: 1200px){
        margin-top: 0;
    }
`

export const Author = styled.h3`
  margin-top: 24px;
  font-size: 0.87rem;
  font-weight: 300;
  font-style: italic;
  color: var(--color-text-primary);
  span{
    color: var(--color-theme)
  }
`