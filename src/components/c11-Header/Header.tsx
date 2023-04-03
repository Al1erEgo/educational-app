import React from 'react'

import styled from 'styled-components'

import logo from '../../assets/incubator-logo.png'

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo src={logo} />
      <Button
        onClick={() => {
          alert(1)
        }}
      >
        Sign in
      </Button>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 30px;
  background: #fcfcfc;
  box-shadow: 0 2px 10px rgba(109, 109, 109, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3);
`
const Logo = styled.img`
  color: white;
  width: 140px;
  margin-left: 10%;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
  color: white;
  font-size: 0.8em;
  width: 80px;
  height: 25px;
  margin-right: 10%;
  border-radius: 30px;
  background-color: #366eff;
  border: none;
`
