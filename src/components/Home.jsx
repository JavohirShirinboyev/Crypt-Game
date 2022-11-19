import React from 'react'
import styled from 'styled-components'
import background from '../assets/background.png'
import image from '../assets/home.png'
import Button from '../components/Button'
import { RiGroupLine } from 'react-icons/ri'


export default function Home() {
  return (
    <Section id='home'>
      <div className="text">
        <h1>
          <span className='highlight'>Earthium</span> is a real-time statergic game
        </h1>
        <p>
          Where you earn money, <span className='highlight'>crypto</span> and <span className='highlight'>NFT's</span> by trading land, finding treasures and building businessess. Welcome!
        </p>
        <Button text='Join our Discor' icon={ <RiGroupLine /> }/>
      </div>
      <div className="image">
        <img src={image} alt="Home Image" />
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .image {
    img {
      width: 80%;
    }
  }
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    margin: 0 1rem;
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 4vw;
      }
    }
  }
`
