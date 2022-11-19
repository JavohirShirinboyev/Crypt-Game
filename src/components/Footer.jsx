import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import logo from '../assets/logo.png';

export default function Footer() {
  const links = [
    { title: "Company", 
      links: [
        "Home", 
        "Map", 
        "About", 
        "News"
      ]
    },
    {
      title: "Links",
      links: [
        "Brochure",
        "Company",
        "Terms & Conditions",
        "Privacy Policy",
        "Cookie Policy",
      ],
    },
    {
      title: "Contact",
      links: [
        "+01 12344 12354",
        "earthium@earthmail.com",
        `Milkyway Sector 75, Planet Earth
      `,
      ],
    },
  ];
  return (
    <Foot>
      <div className="upper_footer">
        <div className="brand">
          <img src={logo} alt="Footer Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis vitae quisquam deserunt iure enim. Quae nemo iste fugiat quam delectus, minima quaerat sunt! Odit.
          </p>
          <div className="mail_container">
            <input type="email" placeholder="Enter Email" />
            <Button text="Get Started"/>
          </div>
        </div>
        {
          links.map(({title, links})=> {
            return (
              <div className="links" key={title}>
                <h3>{title}</h3>
                <ul>
                  {
                    links.map((link) => (
                      <li key={link}>{link}</li>
                    ))
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
      <div className="lower_footer">
        <span>&copy; 2022 Javohir Shirinboyev</span>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Instagram</li>
        </ul>
      </div>
    </Foot>
  )
}

const Foot = styled.footer`
  border-top: 0.02rem solid var(--primary-color);
  margin: 5rem 0 1rem 0;
  .upper_footer {
    margin: 0 5rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 3rem;
    padding-top: 3rem;
    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      img {
        height: 2rem;
      }
      .mail_container {
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          padding: 0.8rem 1rem;
          border-radius: 0.3rem;
          border: none;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.8rem 1rem;
          gap: 0.5rem;
        }
      }
    }
    .links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3 {
          color: var(--primary-color);
        }
        ul {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          li {
            list-style: none;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
              color: var(--primary-color);
            }
          }
        }
      }
  }
  .lower_footer {
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    border-top: 0.02rem solid var(--primary-color);
    padding-top: 1rem;
    margin-bottom: 1rem;
    ul {
      display: flex;
      list-style: none;
      gap: 3rem;
      li {
        transition: 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .upper_footer {
      margin: 2rem 1rem;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      .brand {
        .mail_container {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
    .lower_footer {
      margin: 2rem 1rem;
      flex-direction: column-reverse;
      gap: 1.5rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`