import { ReactNode } from 'react';
import styled from 'styled-components';


interface HomeProps {
  theme: boolean;
  children: ReactNode;
}

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 2000px;
`

export const Cover = styled.div<HomeProps>`
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 24px;

    border: 1px solid green;

    z-index: 0;  

    gap: 24px;

    .title{
      display: flex;
      justify-content: center;

      width: 100%;
      .content{
        font-style: italic;
        div:nth-child(3){
          margin-left: 32px;
        }
      }

      .name{
        font-size: 3rem;
        font-family: 'Roboto';
        font-weight: 700;
        line-height: 100%;
        margin-bottom: 8px;
        color: var(--color-theme);
      }

      .office{
        line-height: 1rem;
        font-weight: 500;
        color: var(--color-text-primary);
      }
      .office span{
        color: var(--color-theme);
      }
      .office:nth-child(3){
        margin-left: 8px;
      }

    }

    .vector{
      display: flex;
      justify-content: center;
      width: 350px;
      height: 350px;
      border: 1px solid red;
    }

    @media (min-width: 500px){
      .title{
        .name{
          font-size: 3.87rem;
        }
        .office{
          font-size: 1.3rem;
        }
      }

      .vector{
        width: 400px;
        height: 400px;
      }
    }

    @media (min-width: 1024px){
      padding-top: 0;
      flex-direction: row;
      gap: 0;

      .title{
        flex: 1;

        .content{
          div:nth-child(2){
            margin-top: 16px;
          }
          div:nth-child(3){
            margin-left: 52px;
          }
        }

        .name{
          font-size: 5rem;
          line-height: 100%;
          font-weight: 900;
        }

        .office{
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }

      .vector{
        width: 500px;
        height: 500px;
        flex: 1;
      }

    }

    @media (min-width: 1300px){
      .vector{
        width: 600px;
        height: 600px;
      }
    }

    @media (min-width: 1440px){
      .title{
        .name{
          font-size: 7rem;
        }
        .office{
          font-size: 2rem;
        }
        .office:nth-child(2){
          margin-top: 8px;
        }
        .office:nth-child(3){
          margin-top: 4px;
        }
      }
    }
`

export const AboutMe = styled.div<HomeProps>`
    width: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    .content{
        width: 100%;
        height:auto;

        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        align-items: center;
        
        padding: 1rem 0.5rem; 
        
        .avatar-img{
            width: 9rem;
            padding: 16px 0;
        }

        .about-me-description{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            margin-top: 16px;

            p{
              font-size: 12px;
              font-family: 'Poppins', sans-serif;
              color: ${props => props.theme.text_primary};
              text-align: left;
            }

            .techs{
              width: 100%;
              height: auto;

              margin-top: 16px;

              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap:0.4rem;
            }

            .download-cv{
            text-decoration: none;
            border: 2px solid ${props => props.theme.borderSeeMoreButton};
            background: transparent;
            color: ${props => props.theme.text_primary};
            border-radius: 4px;
            padding: 0.7rem;
            margin-top: 24px;

            transition: 0.4s ease-in-out;
            
              &:hover{
                background-color: ${props => props.theme.textHoverPrimary};
                color: ${props => props.theme.textSeeMoreButton};
              }
            }
        }
    }

    @media (min-width: 768px){
        justify-content: space-around;
        align-items: center;
        height: 100%;

        .content{
            flex-direction: row;
            justify-content: center;
            align-items: center;

            padding: 0;

            margin-top: 32px;

            max-width: 1900px;

            .avatar-img{
              display: flex;
              align-items: center;
              justify-content: center;
              flex: 1;

                  img{
                      width: 400px;
                      height:400px;
                      padding: 0;
                  }
              }

            .about-me-description{
              display: flex;
              flex: 1;
              gap: 16px;
              align-items: flex-start;

              margin-top: 0;

              p{
                font-size: 18px;
                
              }

              .techs{
                margin-top: 0;
                justify-content: flex-start;
                gap: 1rem;
              }

              .download-cv{
                  border-width: 4px; 
                  border-radius: 8px;
                  font-size: 1.6rem;
                  padding: 0.8rem 2rem;
              }
            }
        }
    }

`

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  padding: 16px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h3{
    margin-top: 24px;
    font-size: 0.87rem;
    font-weight: 300;
    color: #ffff;
  }

  .contact-list{
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 16px;

    .contact-icons{
      width: 200px;
      height: auto;

      margin-top: 8px;

      display: flex;
      justify-content: space-between;

      .contact-item{
        width: 40px;
        height: 40px;

        padding: 8px;

        cursor: pointer;

        border-radius: 8px;

        transition: 0.3s ease-in-out;

        &:hover{
          background-color: #91F9E5;
          fill: #090410;
        }
      }

  }

  .mail{
      display: flex;
      justify-content: space-around;
      align-items: center;

      margin-top: 16px;

      padding: 12px 24px;
      border-radius: 28px;
      background-color: #090410;

      cursor: pointer;

      transition: 0.2s ease-out;

      h5{
        color: #ffff;
        font-size: 1rem;
      }

      span{
        margin-left: 8px;
      }

    &:hover{
      background-color: #1C0C31;
    }
  }
  }

  @media (min-width: 830px){
    .contact-list{
      flex-direction: row;
      gap: 100px;
      margin: 24px 0;
      .contact-icons{
        width: 360px;

        .contact-item{
          width: 54px;
          height: 54px;
          padding: 10px;

          border-radius: 16px;
        }
      }

      .mail{
        padding: 16px 32px;

        h5{
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 1200px){
    h3{
      font-size: 1rem;
    }
    .contact-list{
      gap: 160px;
    }

    .mail{
      margin-top: 0;
    }
  }
`