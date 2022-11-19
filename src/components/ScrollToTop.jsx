import React, {useState} from 'react'
import styled from 'styled-components'
import {AiOutlineArrowUp} from 'react-icons/ai'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false)
  })
  return (
    <Div>
      <a href="#home" className={`${visible ? 'block' : 'none'}`}>
        <AiOutlineArrowUp />
      </a>
    </Div>
  )
}

const Div = styled.div`
  a {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: #000;
      font-size: 1.3rem;
    }
  }
  .none {
    opacity: 0;
    visibility: hidden;
  }
`
