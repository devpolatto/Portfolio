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
`

export const Cover = styled.div`
    width: 100%;
    height: 84vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 24px;

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
      height: 88vh;
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

export const AboutMe = styled.div`
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
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            padding: 8px;
            img{
              height: 180px;
              width: 180px;
              border-radius: 50%;

              box-shadow: 0 0 0 10px #10071D, 
              0 0 0 15px var(--color-theme), 
              0 0 0 10px rgb(209 148 148 / 0%), 
              0 0 0 10px rgb(230 179 179 / 0%), 
              0 0 0 10px rgb(245 214 214 / 0%);
            }
        }

        .about-me-description{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            margin-top: 16px;

            p{
              max-width: 800px;
              font-size: 12px;
              font-family: 'Poppins', sans-serif;
              color: var(--color-text-primary);
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
            border: 2px solid var(--color-theme);
            background: transparent;
            color: var(--color-text-primary);
            border-radius: 4px;
            padding: 0.7rem;
            margin-top: 24px;

            transition: 0.4s ease-in-out;
            
              &:hover{
                background-color: var(--color-theme);
                color: var(--color-text-secundary);
              }
            }
        }
    }

    @media (min-width: 1140px){
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
                      width: 380px;
                      height:380px;
                      padding: 0;

                      box-shadow: 0 0 0 14px #10071D, 
                      0 0 0 20px var(--color-theme), 
                      0 0 0 10px rgb(209 148 148 / 0%), 
                      0 0 0 10px rgb(230 179 179 / 0%), 
                      0 0 0 10px rgb(245 214 214 / 0%);
                  }
              }

            .about-me-description{
              display: flex;
              flex: 1;
              gap: 16px;
              align-items: flex-start;

              margin-top: 0;

              p{
                font-size: 16px;
                
              }

              .techs{
                margin-top: 0;
                justify-content: flex-start;
                gap: 1rem;
              }

              .download-cv{
                  border-width: 4px; 
                  border-radius: 8px;
                  font-size: 1.4rem;
                  padding: 0.8rem 2rem;
              }
            }
        }
    }

`

