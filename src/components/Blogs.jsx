import React from 'react';
import styled from 'styled-components';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

export default function Blogs() {
  const images = [blog1, blog2, blog3];
  return (
    <Section id='blogs'>
      <div className="title">
        <h2>News & Feeds</h2>
        <h5>Where you can earn crypto</h5>
      </div>
      <div className="blogs">
        {
          images.map((img, index) => {
            return (
              <div className="blog" key={index}>
                <img src={img} alt="Blog Image" />
                <div className="data">
                  <h6>1 Jan, 2022</h6>
                  <h4>Rightmove Now Offering Click to Purchase Option</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quaerat deserunt labore iure laborum ut dolorum, blanditiis nesciunt ab assumenda ullam necessitatibus animi.</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      img {
        width: 99%;
      }
      .data {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
  
`
